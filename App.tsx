import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { ApolloProvider } from '@apollo/client';

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
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'default' : 'dark-content'} />
        <RootNavigation/>
      </SafeAreaView>
    </ApolloProvider>
  );
};


export default App;
