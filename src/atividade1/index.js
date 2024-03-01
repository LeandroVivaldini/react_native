import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logo from '../../assets/002-1-react-native.png';

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign: 'center', color:'#1565A0'}}>
            Olá {props.name}!
        </Text>
    );
}

export default function Index(){
    return (
        <View style={styles.container}>
            {/* <Image styles={styles.image}source={{width:'100%', height:'55%'}}/> */}
            <Image styles={styles.image}source={logo}/>
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>

            {/* <Text style={styles.text}> */}
            <Saudacoes name='Mario' />
            <Saudacoes name='Maria' />
            <Saudacoes name='Bruna' />
            <Saudacoes name='Bruno' />
            {/* </Text> */}

            {/* lista bem vindo - ex. comentario*/}
            {/* <Text style={{textAlign:'center'}}>
                Olá Mario!
            </Text>
            <Text style={{textAlign:'center'}}>
                Olá Maria!
            </Text>
            <Text style={{textAlign:'center'}}>
                Olá Bruna!
            </Text>
            <Text style={{textAlign:'center'}}>
                Olá Bruno!
            </Text> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: '#E3F2FD',
        padding:8,
        borderColor:'#1565C0',
        borderWidth:'8',
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
        height:'15%',
        margin:10,
    },
})