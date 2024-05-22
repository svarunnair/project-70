import React from 'react';
import { Image, View, StyleSheet, FlatList, Dimensions } from 'react-native';

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtHLPjX-JJM07u-UG61ByiCidZxeBptbruNLtiYjHfg&s",
  "https://www.redasiainsurance.com/wp-content/uploads/2022/02/Sports-events-insurance-Main-scaled-e1644805433386.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAAjCyFL-qFE0pEHAGl8n6tI77RPWcmt-cYV1KlPMBKkVbzzCQ5JDD6euySjwE8EQM-U&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebvBCApbN4H9jKhSUCSaxcF7TIehkGVo75GMmTrp5vqhlg-YdswK3jyd0f2XPWKwwtik&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJeNmsZ6hT1ujF044pmLSgXa4NOF3ErBosTJuZXx4qoKrFaB_wpu0NEe2HUp0v0Raet4&usqp=CAU",
  "https://www.apple.com/newsroom/videos/apple-celebrates-entertainment/posters/Apple-celebrates-entertainment-hero.jpg.large_2x.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJeNmsZ6hT1ujF044pmLSgXa4NOF3ErBosTJuZXx4qoKrFaB_wpu0NEe2HUp0v0Raet4&usqp=CAU",
  "https://www.apple.com/newsroom/videos/apple-celebrates-entertainment/posters/Apple-celebrates-entertainment-hero.jpg.large_2x.jpg",
];

const screenWidth = Dimensions.get('window').width;

function ScrollData() {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item }} />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: screenWidth / 2.5, // Adjust to fit 2 images per row horizontally
    padding: 5,
  },
  image: {
    width: '100%',
    height: screenWidth / 3, // Adjust to fit 2 rows vertically
    borderRadius: 15,
  },
});

export default ScrollData;

