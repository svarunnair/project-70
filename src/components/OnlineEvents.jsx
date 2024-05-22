import React from 'react';
import {Dimensions, Text} from 'react-native';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

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
];

function OnlineEvents() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {movieList.map(item => (
          <View style={styles.wrap}>
            <Image style={styles.img} source={{uri: item.image}} />
            <View style={styles.rate}>
              <Text style={{color: 'grey'}}>{item.date}</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={{fontSize: 11, color: 'grey'}}>{item.type}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const screenWidth = Dimensions.get('window').width;
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
  title: {
    flexDirection: 'column',
  },
  img: {
    borderRadius: 10,
    width: 120,
    height: 175,
  },
  name: {
    fontSize: 12,
    color: 'black',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingRight: screenWidth * 0.1,
    gap: 30,
  },
  wrap: {
    gap: 5,
    width: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default OnlineEvents;
