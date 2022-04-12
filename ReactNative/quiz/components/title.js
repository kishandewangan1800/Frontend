import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.title} >Quiz App</Text>
    </View>
  )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        textAlign: "center",
        color: "white",
        backgroundColor: "#572cbb",
        fontFamily: 'Roboto'

    }
})

// AppRegistry.registerComponent('Title', () => Title);