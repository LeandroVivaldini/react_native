import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Index_3() {

    var numero=0;

    function AddNumber(){
        numero++;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Atividade 3
            </Text>

            <TouchableOpacity 
            onPress={() => alert('Hello World!')}
            style={styles.button}
            >
            <Text style={styles.textButton}>
                Diga "Hello World!"
            </Text>
            </TouchableOpacity>

            <View style={style.counter}>
                
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
    },
    textButton:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
    },
})