 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
 } from 'react-native';

 import { Colors } from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './src/RootNavigator';
 const App = () => {

   // TODO: interesting (dark mode) not working in ios simulator, react native example
   const isDarkMode = useColorScheme() === 'dark';
console.log(useColorScheme())
   const backgroundStyle = {
     flex: 1,
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'default' : 'dark-content'} />
       <RootNavigation/>
     </SafeAreaView>
   );
 };


 export default App;
