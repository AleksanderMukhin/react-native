import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,AppLoading } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';




export default function App() {
  const [fontsLoaded]=useFonts({
  roboto_reg: require('./assets/fonts/Roboto-Regular.ttf'),
  roboto_med: require('./assets/fonts/Roboto-Medium.ttf'),
  roboto_bold: require('./assets/fonts/Roboto-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={gStyle.main}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      
    </View>
  );
  
}

// export default function App() {
//   const [font, setFont] = useState(false);
//   if(font){return (
//     <View style={gStyle.main}>
//       <RegistrationScreen />
//     </View>
//   );
//   } else {
//     return (<AppLoading startAsync={fonts} onFinish={()=>setFont(true)} />)
//   }  
// }