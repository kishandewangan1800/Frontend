import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title})=> {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Result />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop : 40,
    paddingHorizontal :16,
    // backgroundColor: "#572cbb",
    height:"100%",
    color:"white",
  }
})