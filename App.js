
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, react native!</Text>
      <StatusBar style="auto" />
      <Switch />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
   ...Platform.select({
      ios: {
       backgroundColor: '#fdc'
    },
     android: {
      backgroundColor: '#fdc'
    },
  }),
 },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fdc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 40
//   }
// });
