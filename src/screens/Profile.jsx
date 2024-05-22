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
             <Text style={{color:"grey"}}>Account.................!</Text>
        </View>

        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Icon type='ionicon' name='search-outline'></Icon>
        </View>

        </View>
        {/* language */}
        

        {/* movielist */}
        <ScrollView>
        <View style={{height:screenHeight*.09}}>
        <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}>
       <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>English</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Malayalam</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Tamil</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Kannada</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Telugu</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Hindi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Punjabi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Marathi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Korean</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Japanese</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Multi Language</Text></View>
       
        </ScrollView>

        {/* content */}
      
        </View>
        <View >

<FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={style.row}
      contentContainerStyle={style.container}
    />

    {/* section */}
     {/* language */}
        <View style={{height:screenHeight*.09}}>
        <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}>
       <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>English</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Malayalam</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Tamil</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Kannada</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Telugu</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Hindi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Punjabi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Marathi</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Korean</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Japanese</Text></View>
             <View style={{padding:10}}><Text style={{borderWidth:.4,padding:10,borderRadius:20,color:"red"}}>Multi Language</Text></View>
       
        </ScrollView>

        {/* content */}
      
        </View>

        <FlatList
      data={movie2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={style.row}
      contentContainerStyle={style.container}
    />
    


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