import {View, Text} from 'react-native';

export default function Props ({mensagem}) {
    return(
        <View>
            <text>Mensagem: {mensagem}</text>
        </View>
    );
}