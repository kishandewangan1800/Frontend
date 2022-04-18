import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({button}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{button}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        width:120,
        height:40,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:5,
    },
    buttonText:{
        color:'yellow',
        fontWeight:'bold',
        fontSize:20,
    }
})