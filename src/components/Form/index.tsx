import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { Text, View,TouchableOpacity, Image, TextInput } from 'react-native';

import { FeedbackType } from '../../components/Widget'

import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';

interface Props {
  feedbackType : FeedbackType
}

export function Form({feedbackType} : Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <TouchableOpacity>
        <ArrowLeft 
        size={24}
        weight="bold"
        color={theme.colors.text_secondary}
        />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Image 
        source={feedbackTypeInfo.image}
        style={styles.image}
        />
        <Text style={styles.titleText}>
         {feedbackTypeInfo.title}
        </Text >
      </View>

     </View>

     <TextInput 
     multiline
     style={styles.input}
     placeholder= "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
     placeholderTextColor={theme.colors.text_secondary}
    />

    <View style={styles.footer}>
     <ScreenshotButton 
     onTakeShot={()=> {}}
     onRemoveShot={()=> {}}
     screenshot= "https://es.pngtree.com/freepng/website-link-icon_4438304.html"
     />

     <Button 
     isLoading={true}
     />
    </View>

    </View>
  );
}