import React from 'react';
import { Image, View, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';

const data = [
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
   "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
  "https://netstorage-tuko.akamaized.net/images/f401172bc50bc0c9.jpg?imwidth=900",
];

const numColumns = 3;
const imageWidth = (Dimensions.get('window').width - (numColumns + 1) * 10) / numColumns;

function Events() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ScrollView style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item }} />
        </ScrollView>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: imageWidth,
    height: 100,
  },
  row: {
    justifyContent: 'space-between',
  }
});

export default Events;
