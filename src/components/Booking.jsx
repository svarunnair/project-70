import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    name: 'Godzila and King Kong',
    type: '2h 24.Action triller.UA',
    language: 'English',
    detail:
      'Godzilla x Kong: The New Empire is a 2024 American monster film directed by Adam Wingard. Produced by Legendary Pictures and distributed by Warner Bros.',
    image:
      'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
  },
  {
    name: '777 Charli',
    type: '2h 33.Emotional drama.UA',
    language: 'Kannada, Tamil Malayalam',
    detail:
      '777 Charlie (2022) Is A Adventure Kannada Film Starring Rakshit Shetty,Sangeetha Sringeri,Bobby Simha,Raj B. Shetty,Danish Sait In The Lead Roles, ..',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDhhMjBlMWYtMDVlMy00ZjM3LTg3MTUtZDg0NjA0YzcxOGY4XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_QL75_UX190_CR0,0,190,281_.jpg',
  },
  {
    name: 'KIng Fu Pandey',
    type: '2h 7.Action Comedy.UA',
    language: 'English',
    detail:
      "To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be ...",
    image:
      'https://m.media-amazon.com/images/M/MV5BNDcwYzhmNzgtMWI4Ni00NjAyLWJiZjItY2UyNzBiOWU3MjBmXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg',
  },
  {
    name: 'Vikram',
    type: '2h 34.Action triller.UA',
    language: 'Tamil',
    detail:
      'Kennedy John Victor (born 17 April 1966), better known by his stage name Vikram, is an Indian actor who predominantly works in Tamil cinema.',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTFhMDU5ZGYtNjcyNy00NjAyLWI5YzItYTUwZTk5MjhkMzk0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
  },
  {
    name: 'Inseption',
    type: '2h 54.Action Drama.UA',
    language: 'English',
    detail:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    image:
      'https://resizing.flixster.com/RxGReKiNeLRDhz_1DDe-JiurSSY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg',
  },
];

const screenWidth = Dimensions.get('window').width;

function Booking() {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length;
        scrollViewRef.current.scrollTo({
          x: nextIndex * screenWidth,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.type}</Text>
                <Text style={styles.text}>{item.language}</Text>
                <Text style={styles.text}>{item.detail}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Buy or Rent</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: screenWidth * 0.94,
    margin: 10,
    padding: 15,
    backgroundColor: '#2E4053',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.6,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  text: {
    color: 'white',
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
});

export default Booking;
