import { Icon} from '@rneui/base'
import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Slider from '../components/Slider';
import Booking from '../components/Booking';

const movieList = [
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00135461-pqqyrdnwme-portrait.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0FPyKgfWr4Y7SANrjPRRcMSTo6_Cp1gsUUw_6p9OBNuUkf15OplxkCU9-vOcp7cix8k&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJFDvE33BbRIm1qgqIE0sa8WSu6gJCcuBaU3AFZxEpd5mYhZinHEApmHyAZXe2t-1bDQ&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image: 'https://in.bmscdn.com/events/moviecard/ET00348898.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00397851-mstlzqdcxe-portrait.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00135461-pqqyrdnwme-portrait.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0FPyKgfWr4Y7SANrjPRRcMSTo6_Cp1gsUUw_6p9OBNuUkf15OplxkCU9-vOcp7cix8k&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },{
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00135461-pqqyrdnwme-portrait.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0FPyKgfWr4Y7SANrjPRRcMSTo6_Cp1gsUUw_6p9OBNuUkf15OplxkCU9-vOcp7cix8k&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
];
function LiveEvents() {
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
    <View style={{marginBottom:screenHeight*.1}}>
        {/* navbar */}
        <View style={style.navbar}>
        <View >
            <Text style={{fontSize:22, fontWeight:"600",color:"black"}}>Live Events</Text>
             <Text style={{color:"grey"}}>Bengaluru | 70 Movies</Text>
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

        <Booking/>

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

export default LiveEvents