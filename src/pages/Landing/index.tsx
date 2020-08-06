import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { RectButton } from 'react-native-gesture-handler'

import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'

import styles from "./styles"

import landingImg from "../../assets/images/landing.png"
import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from '../../assets/images/icons/heart.png'

export default function Landing() {
  const { navigate } = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses")
  }

  function handleNavigateToStudyPages() {
    navigate("Study")
  }

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image source={landingImg} style={styles.banner} />
        <Text style={styles.title}>
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.btnsContainer}>
          <RectButton onPress={handleNavigateToStudyPages} style={[styles.btn, styles.btnPrimary]}>
            <Image source={studyIcon} />
            <Text style={styles.btnText}>Estudar</Text>
          </RectButton>

          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.btn, styles.btnSecondary]}
          >
            <Image source={giveClassesIcon} />
            <Text style={styles.btnText}>Dar Aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConns}>
          Total de 285 conexões realizadas {' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    )
  }
}
