import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'



function Song() {
  return (
    <ScrollView horizontal={true}
    showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.scrollContainer}>

    <Image style={styles.img} source={{uri:"https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-sunburn-arena-ft-alan-walker-bengaluru-0-2024-4-19-t-7-36-35.jpg"}}/>   
<Image style={styles.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfokOqc1mAai6bqAecea4LvFd4XuE__RbyUOxB3BqkA&s"}}/>

<Image style={styles.img} source={{uri:"https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-sunburn-arena-ft-alan-walker-bengaluru-0-2024-4-19-t-7-36-35.jpg"}}/>
<Image style={styles.img} source={{uri:"https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-sunburn-arena-ft-alan-walker-bengaluru-0-2024-4-19-t-7-36-35.jpg"}}/>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
    img:{
        width:300,
        height:180,
        borderRadius:15
       
    },
    video:{
        width:200,
        height:100
    },
    scrollContainer:{
        paddingHorizontal: 10,
         gap:10,
    }
})

export default Song