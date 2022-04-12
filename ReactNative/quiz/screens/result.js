import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
      <View style={styles.bannerContainer}>
          
          <Image
            source={{uri: 'https://1.bp.blogspot.com/-ApS1Ddok94Y/YHG58oxsxlI/AAAAAAAACHE/4Zd9-SGrESIMYodNEXSfjm1mqUkcG1-2QCLcBGAsYHQ/s1280/free.jpg'}}
            style={styles.banner}
            resizeMode="contain"
            />
          
          <TouchableOpacity >
              <Text>Result</Text>
          </TouchableOpacity>

      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height : 240,
    width: 360,
}
});