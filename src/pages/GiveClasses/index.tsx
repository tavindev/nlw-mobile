import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

export default function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar você deve se cadastar na nossa plataforma web</Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okBtn}>
        <Text style={styles.okBtnText}>Tudo Bem</Text>
      </RectButton>
    </View>
  )
}
