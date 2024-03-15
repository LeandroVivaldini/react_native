// import * as React from 'react';
import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Index_3() {

    // var numero=0;
    const [numero,setNumero]=useState(0)
    
    function Add(){
        setNumero(numero+1);
    }
    function Remove(){
        setNumero(numero-1);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Calculadora
            </Text>

            <TouchableOpacity 
            onPress={() => alert('Hello World!')}
            style={styles.button}
            >
            <Text style={styles.textButton}>
                Diga "Hello World!"
            </Text>
            </TouchableOpacity>

            <View style={styles.counter}>
                {/* <Text style={styles.textCounter}>{numero}</Text> */}
                
                <View style={styles.botaoContainer}>
                <TouchableOpacity 
                onPress={() => Add()} 
                style={styles.button}>
                    <Text style={styles.textButton}>
                        + 1
                    </Text>
                </TouchableOpacity>
                
                <Text style={styles.textCounter}>{numero}</Text>
                
                <TouchableOpacity 
                onPress={() => Remove()} 
                style={styles.button}>
                    <Text style={styles.textButton}>
                        -  1
                    </Text>
                </TouchableOpacity>
               </View>
               
                <TouchableOpacity 
                onPress={() => setNumero(0)} 
                style={styles.button}>
                    <Text style={styles.textButton}>
                        Zerar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#F5F5F5',
        padding:8,
        width:'100%',
    },
    paragraph:{
        margin:24,
        fontSize:26,
        fontWeight:'bold',
        textAlign:'center',
        color: '#9E9E9E',
    },
    button:{
        backgroundColor:'#9E9E9E',
        height:60,
        justifyContent:'center',
        borderColor:'#000',
        padding:8,
        borderWidth:4,
        borderRadius:20,
    },
    textButton:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
    },
    counter:{
        borderWidth:4,
        vorderColor:'#9E9E9E',
        padding:8,
        marginTop:8,
        justifyContent:'center',
    },
    textCounter:{
        fontSize:32,
        color:'#424242',
        textAlign:'center',
        fontWeight:'bold',
        padding:8,
    },
    botaoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
})