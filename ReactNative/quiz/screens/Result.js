import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const Result = () => {
  return (
    <View>
        <View> 
        <Text>Result</Text>
       <Image
      source={{uri:'https://leverageedu.com/blog/wp-content/uploads/2020/06/Online-Test.jpg'}}
      style={styles.image}
      />
       </View>

       <View>
           <Text>Marks/marks</Text>
           <Button button="Play Again" />
       </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    }
})