import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

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

function Movies() {
  const naviation = useNavigation();
  const handleMovies = name => {
    naviation.navigate('About', name);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {movieList.map(item => (
          <View style={styles.wrap}>
            <TouchableOpacity  onPress={() => handleMovies(item)}>
              <Image style={styles.img} source={{uri: item.image}} />
            </TouchableOpacity>
            <View style={styles.rate}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{bottom: 3, color: 'grey'}}>☆</Text>
                <Text style={{fontSize: 11, color: 'grey'}}>{item.rate}</Text>
              </View>
              <Text style={{fontSize: 11, color: 'grey'}}>
                {item.vote} votes
              </Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  rate: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#F0F8FF',
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    borderRadius: 10,
    
    marginRight:5,
    width: screenWidth * 0.3,
    height: screenHeight * 0.24,
  },
  name: {
    fontSize: 12,
    color: 'black',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingRight:screenWidth*.1,
    gap: 20,
  },
  wrap: {
    gap: 5,
    marginLeft: 10,
    width: screenWidth*.25,
    flexDirection: 'column',
  },
});

export default Movies;
