import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import { Image, ScrollView, StyleSheet, View } from 'react-native'

const movieList=[
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00395372-jktwuzzlkc-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00396235-eblynawtzn-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383732-camkdndgfq-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392974-hhqrpbnyxw-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00394634-amutvztwcs-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },


]



function Popular() {
    const navigation=useNavigation()
    const handleImg=(item)=>{
    navigation.navigate("About",item)
    }
  return (
    <View>

    <ScrollView horizontal={true} 
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.scrollContainer}>

    {movieList.map((item)=>(
        <View style={styles.wrap}>
<TouchableOpacity onPress={()=>handleImg(item)}>
        <Image style={styles.img} source={{uri:item.image}}/>
        </TouchableOpacity>
        <View style={styles.rate}>
        <Text style={{color:"grey"}}>{item.date}</Text>
       
        </View>
        <View style={styles.title}>
        <Text style={styles.name}>{item.name}</Text>
         <Text style={{fontSize:11,color:"grey"}}>{item.type}</Text>
         </View>
        </View>
    ))}
        
    </ScrollView>

    </View>
  )
}
const screenWidth=Dimensions.get("window").width
const styles=StyleSheet.create({
    container:{
        borderWidth:1,
    },
    rate:{
        width:"100%",
        borderRadius:4,
        backgroundColor:"#F0F8FF",
        color:"black",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        flexDirection:"column",

    },
    img:{
        borderRadius:10,
        width:120,
        height:175,
    },
    name:{
        fontSize:12,
        color:"black"
    },
    scrollContainer:{
         paddingHorizontal: 10,
         paddingRight: screenWidth * 0.1,
         gap:30,
    },
    wrap:{
        gap:5,
        width:100,
        flexDirection:"column",
        justifyContent:"center",
       
    }
})

export default Popular