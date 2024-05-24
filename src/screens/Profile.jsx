import { Icon} from '@rneui/base'
import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

const movieList = [
  {
    name: 'Guruvayurambala Nadayil',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxMC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395524-eeyedkkavx-portrait.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Nadikar Thilakam',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICAxLjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396487-lqhlbpzawf-portrait.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'The Garfeild movie',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA3LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00376330-zqrkjyhqjm-portrait.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Lagaan',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAxNi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Planet of the apes',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAxNC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374973-epcstljhec-portrait.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Leo',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmFiOGYyZjQtZmZmNC00ZTgzLWI5ZjktMTRiYzc5NjAzODRkXkEyXkFqcGdeQXVyMTYyNDkzNzgz._V1_.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Interstellar',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
  {
    name: 'Nine',
    image:
      'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/9-malayalam-et00072985-23-03-2018-06-08-38.jpg',
    rate: '8.8',
    vote: '10.3K',
  },
];

function Profile() {
    const movies = movieList.slice(0, 4);
    const movie2=movieList.slice(4, 8);

  const renderItem = ({ item }) => (
    <View style={style.card}>
      <Image source={{ uri: item.image }} style={style.img} />
      <Text style={style.title}>{item.name}</Text>
      <Text style={style.subtitle}>{item.rate} | {item.vote} Votes</Text>
    </View>
  );
  return (
    <View style={{}}>
        {/* navbar */}
        <View style={style.navbar}>
        <View >
            <Text style={{fontSize:22, fontWeight:"600",color:"black"}}>Profile page</Text>
             <Text style={{color:"grey"}}>Account</Text>
        </View>

        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Icon type='ionicon' name='person-circle-outline'></Icon>
        </View>

        </View>
        {/* language */}
        <ScrollView >
        <View style={{display:"flex",flexDirection:"column",gap:20,backgroundColor:"#F5F5F5"}}>
        

        <View style={{padding:screenWidth*.03,backgroundColor: 'rgba(26, 666, 26, 0.1)',}}> 
        <Text style={{color:"grey"}}>8 booking away from being a SUPERSTAR</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={{color:"grey"}}>Rewards and benefits await. Know more</Text>
          <Text style={{color:"grey"}}>></Text>
          <View>
      
</View>

          </View>
        
        </View>
        
        <View style={{display:"flex",flexDirection:"column",backgroundColor:"white"}}>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Your order</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Stream Library</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Play Credit Card</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Help Center</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Account & Setting</Text>
                <Text>></Text>
            </View>
            </View>

            <View style={{display:"flex",flexDirection:"column",backgroundColor:"white"}}>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Rewards</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Offers</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Gift Cards</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>Food & Beverages</Text>
                <Text>></Text>
            </View>
            <View style={{padding:20,borderWidth:.2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>List your Show</Text>
                <Text>></Text>
            </View>
            </View>
            </View>

            <View style={{display:"flex",flexDirection:"column",}}>

    <View style={{padding:screenWidth*.1,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={style.text}>Share</Text>
      <Text style={style.text}>|</Text>
      <Text style={style.text}>Rate Us</Text>
       <Text style={style.text}>|</Text>
      <Text style={style.text}>bookasmile</Text>
      </View>

<View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

      <Text style={style.app}>App Version 15.4.0</Text>

</View>
    
      
    </View>
    
        </ScrollView>


       
    </View>
  )
}

const screenWidth= Dimensions.get("window").width
const screenHeight= Dimensions.get("window").height

const style=StyleSheet.create({
    navbar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:.4,
        padding:10,
        width:screenWidth
    },
    app:{
    marginBottom:screenHeight*.15,
    color:"grey"
    },
    text:{
      color:"grey",
      fontSize:14,
    },
    btn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    
    },
    container: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: screenWidth / 2.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
    img:{
        width:screenWidth*.4,
        height:screenHeight*.4,
        borderRadius:10,
    }
})

export default Profile