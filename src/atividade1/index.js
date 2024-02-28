import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logo from './assets/002-1-react-native.png';

export default function Index(){
    return (
        <View style={StyleSheet.container}>
            <Image source={logo} style={{width: '100%', height: '15%'}}/>
            <Text style={StyleSheet.paragraph}>
                Exemplo 2
            </Text>
        </View>
    );
}

const styless = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#E3F2FD',
        padding:8,
    },
    paragraph: {
        margin:24,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#1565C0',
    },
    image:{
        width:'90%',
        height:'15%'
        margin:10,
    },
})