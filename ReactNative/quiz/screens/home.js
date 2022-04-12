import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
          
          <Image
            source={{uri: 'https://1.bp.blogspot.com/-ApS1Ddok94Y/YHG58oxsxlI/AAAAAAAACHE/4Zd9-SGrESIMYodNEXSfjm1mqUkcG1-2QCLcBGAsYHQ/s1280/free.jpg'}}
            style={styles.banner}
            resizeMode="contain"
            />
          
          <TouchableOpacity >
              <Text>Start</Text>
          </TouchableOpacity>

      </View>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    banner: {
        height : 240,
        width: 360,
    },
    bannerContainer:{
        justifyContent :"center",
        alignContent: "center"
    }
});

