import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>
          How many cows are there in the village
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
      <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({

  container:{
    padding:10,
    height:'100%',
  },
  question:{
    marginVertical:15,
    // height:'10%',
  },
  options:{
    marginVertical:15,
    flex:1,
  },

  button:{
    marginBottom:15,
    paddingVertical:15,
    justifyContent:"space-between",
    flexDirection:"row"
  }


})