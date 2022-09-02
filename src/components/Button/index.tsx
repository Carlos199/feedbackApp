import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean
}

export function Button({isLoading, ...rest}: Props) {
  return (
    <TouchableOpacity
    style={styles.container}
    {...rest}
    >
        {
            isLoading 
            ?
            <ActivityIndicator />
            :
            <Text style={styles.title}>
            Enviar Feedback
            </Text>
        }

    </TouchableOpacity>
  );
}