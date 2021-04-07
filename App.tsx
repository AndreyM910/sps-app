import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import Toast from 'react-native-root-toast';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import RootNavigation from './src/RootNavigator';
import { colors } from './src/shared/styles/styles';
import { apolloClient } from './src/shared/graph/apollo-client';

const App = () => {

  // TODO: interesting (dark mode) not working in ios simulator, react native example
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  };

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle}>
          <Toast/>
          <StatusBar barStyle={isDarkMode ? 'default' : 'dark-content'} />
          <RootNavigation/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};


export default App;
