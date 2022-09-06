import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import successImg from '../../assets/Success.png'
import Copyright from '../Copyright';

import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
     <Image 
     source={successImg}
     style={styles.image}
     />

     <Text style={styles.title}>
        Agradecemos su feedback
     </Text>

     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>
            Quiero enviar otro
        </Text>
     </TouchableOpacity>

     <Copyright />

    </View>
  );
}