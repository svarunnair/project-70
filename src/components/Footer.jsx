import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Icon, ScreenWidth } from '@rneui/base'

function Footer() {
  return (
    <View style={style.container}>

    <View>
 <Icon type='ionicon' color="red" name="home-outline"></Icon>
    <Text style={{color:"grey",fontSize:15}}>Home</Text>
    </View>

    <View>
     <Icon type='ionicon'  name="videocam-outline"></Icon>
    <Text style={{color:"grey",fontSize:15}}>Movies</Text>
    </View>

    <View>
     <Icon type='ionicon'  name="film-outline"></Icon>
    <Text style={{color:"grey",fontSize:15}}>Live Events</Text>
    </View>

    <View>
     <Icon type='ionicon' name="person-outline"></Icon>
    <Text style={{color:"grey",fontSize:15}}>Profile</Text>
    </View>


    </View>
  )
}

const style=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        width:ScreenWidth,  
        backgroundColor:"#FAF8F8",
    }
})

export default Footer