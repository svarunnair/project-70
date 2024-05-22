import React from 'react'
import { Dimensions, Text } from 'react-native'
import { Image, ScrollView, StyleSheet, View } from 'react-native'

const movieList=[
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00363551-snsxxdhlnp-portrait.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://i.pinimg.com/736x/ab/da/51/abda5112f6327daf5ddc92820690edaf.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://creativeyatra.com/wp-content/uploads/2018/12/Standup-The-Lineup-Standup-Comedy-Show.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://creativeyatra.com/wp-content/uploads/2021/11/Friday-Night-Comedy.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },
    {
        name:"Kudremukh Trek -My HIKES",
        image:"https://i.pinimg.com/222x/17/51/1d/17511dc9e5d4f577b6ef2487f746ed3f.jpg",
        date:"Fri 24 May onwards",
        type:"Adventure Parks"
    },


]



function Laughter() {
  return (
    <View>

    <ScrollView horizontal={true} 
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.scrollContainer}>

    {movieList.map((item)=>(
        <View style={styles.wrap}>

        <Image style={styles.img} source={{uri:item.image}}/>
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

export default Laughter