import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions, Text} from 'react-native';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

const movieList = [
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00393074-ntahgcfdsh-portrait.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQK9dseWcfKQ5TVuJExtVUnc2xAcx5guV7yrf7D6eWpEBJac5dxkuJaa1cXRbTUcEy7A&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDOROn1Ob97qWkgE3nrwG1PHHYIioddZ3MXLUnwT6v3W1E1HHe7D7OoJlXiDs9XNAO-Y&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B8g8Ddf64oK8xX9ZrwalPicojfXGz0BmaL_GYehXl_N-2R286neOItliXDVHotO9K68&usqp=CAU',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
  {
    name: 'Kudremukh Trek -My HIKES',
    image:
      'https://i.pinimg.com/222x/17/51/1d/17511dc9e5d4f577b6ef2487f746ed3f.jpg',
    date: 'Fri 24 May onwards',
    type: 'Adventure Parks',
  },
];

function Theater() {
  const navigation = useNavigation();

  const handleImg = (item) => {
    navigation.navigate('About', item);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {movieList.map(item => (
          <View style={styles.wrap}>
            <TouchableOpacity onPress={() => handleImg(item)}>
              <Image style={styles.img} source={{uri: item.image}} />
            </TouchableOpacity>
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
    gap: 30,
    paddingRight: screenWidth * 0.1,
  },
  wrap: {
    gap: 5,
    width: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Theater;
