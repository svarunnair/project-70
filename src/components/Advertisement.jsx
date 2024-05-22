import React from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'



function Advertisement() {
    
    
  return (
    <View>

<ScrollView horizontal={true}>
    <Image style={styles.img}  source={{uri:"https://assets-in.bmscdn.com/promotions/cms/creatives/1715344899444_mazjobraniweb.jpg"}}/>
<Image style={styles.img} source={{uri:"https://assets-in.bmscdn.com/promotions/cms/creatives/1714466513059_fgdht.jpg"}}/>
<Image style={styles.img} source={{uri:"https://assets-in.bmscdn.com/promotions/cms/creatives/1714047786506_12angrymenhomebannerweb.jpg"}}/>
</ScrollView>
   

    </View>
  )
}

const screenWidth=Dimensions.get('window').width


const styles= StyleSheet.create({
    container:{
        borderWidth:2,
        padding:5,
        display:"flex",
        flexDirection:"row",
        
    },
 img:{
    width:screenWidth,
    height:200,
 }
})

export default Advertisement