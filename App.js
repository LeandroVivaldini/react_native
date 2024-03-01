// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Props mensagem={'Sistem react-native'}/>
//       <Props mensagem={'Hoje está calor!'}/>
      
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//------------------------------------------------------------------------
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Index from './src/atividade1/index.js';



export default function App(){
  return(
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#90CAF9',
    padding:8,
  },
});