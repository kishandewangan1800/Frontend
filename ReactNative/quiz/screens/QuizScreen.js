import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
          <Text style={styles.question}>
              This will show the question
          </Text>
      </View>

      <View style={styles.optionContainer}>
          <TouchableOpacity>
              <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.option}>Option 2</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.option}>Option 3</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.option}>Option 4</Text>
          </TouchableOpacity>

      </View>

      <View style={styles.button}>
          <Button button='Skip'/>
          <Button button='Next'/>
      </View>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
    container:{
        height:'100%',
        padding:10,
    },
    questionContainer:{
        width:'100%',
        height:'30%'
    },
    question:{
        fontSize:25,
        color:'yellow',
        // fontWeight:'bold',
        fontFamily:'Roboto-Bold'
    },

    optionContainer:{
        height:'60%'
    },

    option:{
        fontSize:25,
        color:'yellow',
        marginVertical:5,
        fontFamily:'Rubik-Regular',
    },

    button:{
        justifyContent:'space-between',
        flexDirection:'row',
        margin:10,
    }
})