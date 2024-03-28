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
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Constants from 'expo-constants';
// import Index from './src/atividade1/index.js';
// import Exemplo_3 from './src/ex_3/index.js';
// import Index_3 from './src/atividade3';
import Exemplo4 from './src/ex_4';
import { StatusBar } from 'expo-status-bar';

export default function App(){
  return(
    <View style={styles.container}>
      {/* <Index /> */}
      {/* <Index_3/> */}
      <Exemplo4/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor:'#B71C1C',
    padding:8,
  },

});