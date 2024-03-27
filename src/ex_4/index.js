import {View,Text, TextInput, Pressable} from 'react-native';

import styles from './styles';
import { useState } from 'react';

export default function Exemplo4 () {
   
    const [mensagem, setMensagem] = useState('Sua mensagem aqui:');
    const [mens2, setMens2] =useState('Outra mensagem...');
    const [mensTela, setMensTela] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
            
            <text style={styles.txtSaida}>{mensagem}</text> 
        
            <TextInput 
            style={styles.txtEntrada}
            placeholder='Digite o texto aqui...'
            onChangeText={(txt) => setMensagem(txt)}
            />

            <Text style={styles.txtSaida}>{mensTela}</Text>
            <TextInput
             style={styles.txtEntrada}
            //  placeholder='Outro texto...'
             onChangeText={(entrada) => setMens2(entrada)}
             />
            <Pressable onPress={() => setMensTela(mens2)}>
            <Text>Exibir mensagem</Text>
            </Pressable>
        </View>
       

    );
}