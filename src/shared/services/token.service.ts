import AsyncStorage from '@react-native-async-storage/async-storage';
import { BehaviorSubject } from 'rxjs';
import { apolloClient } from '../graph/apollo-client';

export enum AuthorizedStatus {
  UNAUTHORIZED = 'UNAUTHORIZED',
  AUTHORIZED = 'AUTHORIZED',
  LOADING = 'LOADING',
}

class TokenService {
  private authToken: string | null = null;
  private tokenStream = new BehaviorSubject<{authToken: string | null, status: AuthorizedStatus}>({authToken: null, status: AuthorizedStatus.LOADING});

  constructor() {
    this.tokenStream.subscribe(({authToken}) => {
      this.authToken = authToken;
    });
    TokenService.getTokenFromStorage().then((authToken) => this.sendToken(authToken));
  }

  private static getTokenFromStorage() {
    return AsyncStorage.getItem('auth_token');
  }

  private sendToken(authToken: string | null) {
    this.tokenStream.next({status: !!authToken ? AuthorizedStatus.AUTHORIZED : AuthorizedStatus.UNAUTHORIZED, authToken})
  }

  public subscribeToAuthStatus(callback: (status: AuthorizedStatus) => void) {
    return this.tokenStream.subscribe(({status}) => callback(status));
  }

  public getToken() {
    return this.authToken;
  }

  public setToken(authToken: string | null) {
    authToken && AsyncStorage.setItem('auth_token', authToken).then(() => {
      this.sendToken(authToken)
    });
    return authToken;
  }

  public removeToken() {
    // reset cache
    apolloClient.resetStore();
    AsyncStorage.removeItem('auth_token').then(() => {
      this.sendToken(null);
    });
  }
}

export default new TokenService();
