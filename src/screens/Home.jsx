import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Categorys from '../components/Categorys';
import Advertisement from '../components/Advertisement';
import Movies from '../components/Movies';
import Song from '../components/Song';
import Explore from '../components/Explore';
import Events from '../components/Events';
import Booking from '../components/Booking';
import Entertianment from '../components/Entertianment';
import Laughter from '../components/Laughter';
import Theater from '../components/Theater';
import Popular from '../components/Popular';
import Games from '../components/Games';
import OnlineEvents from '../components/OnlineEvents';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Icon} from '@rneui/base';
import ScrollData from '../components/ScrollData';

function Home() {
  return (
    <View>
      <Navbar />
      
      <View style={{height: screenHeight}}>
     
        <ScrollView style={styles.outer}>
         <View style={styles.line} />
          <Categorys />
          <Slider />

          <View style={styles.boxTwo}>
            <Text style={styles.movies}>Recommended Movies</Text>
            <Text style={styles.see}>See All ></Text>
          </View>
          <ScrollView>
            <Movies />
          </ScrollView>

          {/* section1 */}
          <View style={styles.browse}>
            <View style={styles.browseInner}>
              <View
                style={{
                  backgroundColor: 'pink',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  width: '20%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    position: 'relative',
                    top: 1,
                    borderRadius: 10,
                  }}
                  source={{
                    uri: 'https://banner2.cleanpng.com/20240210/uvo/transparent-location-icon-map-with-users-location-and-nearby-1710881914600.webp',
                  }}
                />
                {/* <Icon type='ionicon' name='location-outline'></Icon> */}
              </View>

              <View style={{display: 'flex', paddingLeft: 35}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    padding: 3,
                    color: 'grey',
                  }}>
                  Browse By Cinema >>>
                </Text>
                <Text style={{color: 'red', fontSize: 12, paddingLeft: 5}}>
                  See what's playing in cinemas near you
                </Text>
              </View>
            </View>
          </View>

          {/* adv */}
          <View
            style={{
              padding: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: screenWidth * 0.9, height: screenHeight * 0.2}}
              source={{
                uri: 'https://inc42.com/wp-content/uploads/2023/03/BookMyShow-FY22_1200.jpg',
              }}
            />
          </View>

          {/* component2 */}
          <View style={styles.song}>
            <Text style={styles.alan}>Alan Walker Indian Tour</Text>
            <Text style={styles.ind}>Walkerworld Comes to India!</Text>
            <View style={styles.songdiv}>
              <Song />
            </View>
            <Text style={{color: 'black', fontWeight: '300', padding: 10}}>
              It's true 'Legents Never Die'!
            </Text>
          </View>

          <Slider />

          {/* component3 */}
          <View style={styles.explore}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Explore Fun Activities
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <Explore />
          </View>

          {/* componet4 */}
          <View style={styles.event}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '400'}}>
              The Best Events This Week
            </Text>
            <Text style={{fontSize: 10, color: 'grey'}}>
              Live event for all your entertainment needs
            </Text>

            <View
              style={{
                padding: 10,
                gap: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 15,
              }}>
              <Image
                style={{width: 170, height: 110, borderRadius: 10}}
                source={{
                  uri: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00135711-mnyvsrjgvq-portrait.jpg',
                }}
              />
              <Image
                style={{width: 170, height: 110, borderRadius: 10}}
                source={{
                  uri: 'https://www.vermontartscouncil.org/wp-content/uploads/2023/09/LSOH-1.jpg',
                }}
              />
            </View>
          </View>

          {/* componet5 */}
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
              Browse Events by Category
            </Text>
            <Text style={{fontSize: 10, paddingTop: 5, color: 'grey'}}>
              Live events for all your entertainment needs
            </Text>
          </View>
          <ScrollData />

          {/* Adv2*/}
          <Image
            style={{width: '100%', height: 100, marginTop: 30}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzJEHspjQLYokQlHdLSlU-h8tuWUSeEKgDU5gnkqQPg&s',
            }}
          />

          {/* Componet6 */}
          <Booking />

          {/* Component7 */}
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, color: 'black'}}>
              The Ultimate Events List
            </Text>
            <Text style={{fontSize: 11, marginTop: 4, color: 'grey'}}>
              Good times outdoor or at home
            </Text>
          </View>

          <ScrollData />

          {/* component2 */}
          <View
            style={{
              marginTop: 30,
              paddingVertical: 10,
              gap: 12,
              paddingVertical: 20,
              backgroundColor: '#EBF5FB',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: screenWidth * 0.94,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.eventss}>Must-attend Live Events</Text>
              <Text style={{color: 'red'}}>Seel All ></Text>
            </View>
            <View style={styles.songdiv}>
              <Explore />
            </View>
          </View>

          {/* component3 */}
          <View style={styles.explore}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Laughter Therapy
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <Laughter />
          </View>

          {/* component3 */}
          <View style={styles.explore}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                The Best of Theatre Plays
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <Theater />
          </View>

          {/* component3 */}
          <View style={styles.explore}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Popular Events
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <Popular />
          </View>

          {/* component3 */}
          <View style={styles.explore}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Top Games & Sport Events
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <Games />
          </View>

          {/* component3 */}
          <View style={{marginTop: 30, marginBottom: 30}}>
            <View style={styles.expoTextDiv}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 18,
                  fontWeight: '400',
                }}>
                Online Streaming Events
              </Text>
              <Text style={{color: 'red', padding: 10}}>See All ></Text>
            </View>
            <OnlineEvents />
          </View>
        </ScrollView>
      </View>
      {/* <Footer /> */}
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  eventss: {
    color: 'black',
    fontSize: 18,
  },
  event: {
    marginTop: 30,
    padding: 10,
  },
  songdiv: {
    width: '100%',
  },
  expoTextDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outer: {},
  ind: {
    paddingBottom: 15,
    paddingLeft: 10,
    color: 'grey',
  },
   line: {
    height: 0.4,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  explore: {
    marginTop: 30,
  },
  alan: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    padding: 10,
  },
  song: {
    backgroundColor: '#EBEDEF',
    width: '100%',
  },
  browseInner: {
    flexDirection: 'row',
    height: 60,
    width: '95%',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
  },
  wrapimgOne: {
    borderWidth: 2,
    borderColor: 'red',
  },
  boxThree: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  browse: {
    paddingTop: 25,
    paddingBottom: 20,
    display: 'flex',
    justifyContentL: 'center',
    alignItems: 'center',
  },

  one: {
    borderWidth: 1,
    borderColor: 'red',
    height: 50,
  },
  wrapimg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderWidth: 2,
    marginBottom: 10,
  },
  see: {
    color: 'red',
  },
  imgOne: {
    width: '90%',
    height: 180,
  },
  movies: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
  },
  boxTwo: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: '90%',
    height: 60,
  },
});

export default Home;
