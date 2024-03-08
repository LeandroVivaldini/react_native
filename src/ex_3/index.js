import React,{useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Exemplo_3 () {

    let numero = 0;

    function Ola (nome) {
        alert(`Olá ${nome}`);
    }

    function incremento(){
        numero++;
        // console.log(numero);
    }

    return(
        <View style = {styles.container}>
            <Text style={styles.titulo}> Exemplo 3 </Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => Ola('Leandro')}
                >
                <Text style={styles.txtBotao}>Botão</Text>
                </TouchableOpacity>
            <Text style={styles.titulo}>Valor: {numero}</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => incremento()}>

                <Text style={styles.txtBotao}>+1</Text>
                </TouchableOpacity>

        </View>

    );
}