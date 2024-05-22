
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { Icon } from '@rneui/base'


function Categorys() {
  return (
    <View styles={styles.container}>
       <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} contentContainerStyle={styles.scrollContainer}>
        <View>
        <Icon type='ionicon' color="red" name="tv-outline"></Icon>
       
        
        <Text style={styles.text}>Movies</Text>
        </View>

        <View>
        <Icon type='ionicon'  color="red" name="bicycle-outline"></Icon>
        <Text style={styles.text}>Sports</Text>
        </View>

        <View>
        <Icon type='ionicon'  color="red" name="musical-notes-outline"></Icon>
        <Text style={styles.text}>Music Shows</Text>
        </View>

        <View>
        <Icon type='ionicon'  color="red" name="videocam-outline"></Icon>
        <Text style={styles.text}>Comedy Shows</Text>
        </View>

        <View>
        <Icon type='ionicon' color="red" v name="game-controller-outline"></Icon>
        <Text style={styles.text}>Steam</Text>
        </View>

        <View>
        <Icon type='ionicon'  color="red" name="game-controller-outline"></Icon>
        <Text style={styles.text}>Adventure</Text>
        </View>

        <View>
        <Icon type='ionicon'  color="red" name="game-controller-outline"></Icon>
        <Text style={styles.text}>See All</Text>
        </View>
        
       </ScrollView>
    </View>
  )
}


const styles= StyleSheet.create({
    container:{
        borderWidth:2,
        padding:5,
        display:"flex",
        flexDirection:"row",
        
    },
    text:{
       color:"black",
       fontSize:11,
        padding:3
    },
    scrollContainer: {
    paddingHorizontal: 10, 
    padding:15,
    gap:30,
  }
})



export default Categorys