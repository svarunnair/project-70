import { Icon } from '@rneui/base'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'


function Navbar() {
  return (
    <View style={styles.container}>
    <View style={styles.name}>
        <Text style={styles.title}>It All Starts Here!</Text>
        <Text style={styles.loc}>Bengaluru ></Text>
    </View>


<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:screenWidth*.3,gap:10}}>
<Icon  type='ionicon' name="search-outline"></Icon>
<Icon  type='ionicon' name="notifications-outline"></Icon>
<Icon  type='ionicon' name="scan-outline"></Icon>
</View>

    </View>
  )
}
const screenWidth=Dimensions.get('window').width
const styles= StyleSheet.create({
    container:{
     
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        fontSize:25,
        fontWeight:"700",
        color:"black"
    },
    name:{
        
    },
    loc:{
        color:"red"
    },
})

export default Navbar