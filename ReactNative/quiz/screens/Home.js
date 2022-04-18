import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Home = () => {
  return (
    <View>
      <Title />
      <Image
      source={{uri:'https://leverageedu.com/blog/wp-content/uploads/2020/06/Online-Test.jpg'}}
      style={styles.image}
      />
      <TouchableOpacity>
          <Text>Start</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    }
})