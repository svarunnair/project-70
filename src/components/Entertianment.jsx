import React from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtHLPjX-JJM07u-UG61ByiCidZxeBptbruNLtiYjHfg&s",
  "https://www.redasiainsurance.com/wp-content/uploads/2022/02/Sports-events-insurance-Main-scaled-e1644805433386.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAAjCyFL-qFE0pEHAGl8n6tI77RPWcmt-cYV1KlPMBKkVbzzCQ5JDD6euySjwE8EQM-U&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebvBCApbN4H9jKhSUCSaxcF7TIehkGVo75GMmTrp5vqhlg-YdswK3jyd0f2XPWKwwtik&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJeNmsZ6hT1ujF044pmLSgXa4NOF3ErBosTJuZXx4qoKrFaB_wpu0NEe2HUp0v0Raet4&usqp=CAU",
  "https://www.apple.com/newsroom/videos/apple-celebrates-entertainment/posters/Apple-celebrates-entertainment-hero.jpg.large_2x.jpg",
];

function Entertainment() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      {data.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item }} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 15,
  },
});

export default Entertainment;
