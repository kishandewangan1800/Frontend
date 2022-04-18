import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import QuizScreen from './screens/QuizScreen'
import Result from './screens/Result'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <QuizScreen />
      {/* <Result /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3b0d60',
  }
})