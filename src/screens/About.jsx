import {Icon} from '@rneui/base';
import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Movies from '../components/Movies';
import {useNavigation} from '@react-navigation/native';

const topData = [
  {
    image:
      'https://pbs.twimg.com/profile_images/1663440674530664449/4nhk2jsh_400x400.jpg',
    name: 'YES Private Debit Card Offer',
  },
  {
    image:
      'https://5.imimg.com/data5/RE/SP/EN/SELLER-95153528/hdfc-logo-250x250.png',
    name: 'Buy 1 get 1 movie ticket free + 50%',
  },
  {
    image:
      'https://pbs.twimg.com/profile_images/1663440674530664449/4nhk2jsh_400x400.jpg',
    name: 'Get 25% off',
  },
  {
    image:
      'https://pbs.twimg.com/profile_images/1663440674530664449/4nhk2jsh_400x400.jpg',
    name: 'IndusInd Bank',
  },
];

const castData = [
  {
    name: 'Anya Taylor',
    role: 'Furiosa',
    image:
      'https://resizing.flixster.com/RTuJBG1AykHqUgqAF6slzTp10SI=/ems.ZW1zLXByZC1hc3NldHMvY2VsZWJyaXRpZXMvZDhjYTgwYzUtM2Q5Ny00OTBmLTkyOWUtZDhmMDI0N2Q2YTQxLmpwZw==',
  },
  {
    name: 'Chris Hemosworth',
    role: 'Dementus',
    image:
      'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
  },
  {
    name: 'Tom Burke',
    role: 'Praetorian Jack',
    image:
      'https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a',
  },
  {
    name: 'Alyla Browne',
    role: 'Young Furiosa',
    image:
      'https://images.mubicdn.net/images/cast_member/1095414/cache-955405-1711671649/image-w856.jpg',
  },
  {
    name: 'Tom Burke',
    role: 'Praetorian Jack',
    image:
      'https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a',
  },
  {
    name: 'Alyla Browne',
    role: 'Young Furiosa',
    image:
      'https://images.mubicdn.net/images/cast_member/1095414/cache-955405-1711671649/image-w856.jpg',
  },
];

const crewData = [
  {
    name: 'Anya Taylor',
    role: 'Furiosa',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ5NTYwMjcyMF5BMl5BanBnXkFtZTYwMDQ0MjQz._V1_.jpg',
  },
  {
    name: 'Chris Hemosworth',
    role: 'Dementus',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSnYgfkNRiZ7ULV1uA4KvKJ9NXFdwlI92vEDcDSvoDQ&s',
  },
  {
    name: 'Tom Burke',
    role: 'Praetorian Jack',
    image:
      'https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a',
  },
  {
    name: 'Alyla Browne',
    role: 'Young Furiosa',
    image:
      'https://images.mubicdn.net/images/cast_member/1095414/cache-955405-1711671649/image-w856.jpg',
  },
  {
    name: 'Tom Burke',
    role: 'Praetorian Jack',
    image:
      'https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a',
  },
  {
    name: 'Alyla Browne',
    role: 'Young Furiosa',
    image:
      'https://images.mubicdn.net/images/cast_member/1095414/cache-955405-1711671649/image-w856.jpg',
  },
];

function About({route}) {
  const id = route.params;
  console.log('para....', id);
  const navigation = useNavigation();

  return (
    <View>
      {/* nav */}
      <View style={style.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon type="ionicon" name="chevron-back-outline" />
        </TouchableOpacity>

        <Text style={{color: 'black'}}>{id.name}</Text>
        <Icon type="ionicon" name="share-social-outline" />
      </View>

      {/* content */}
      <ScrollView style={{height: screenHeight - 115}}>
        <TouchableOpacity
          style={{
            display: 'flex',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '95%', height: screenWidth * 0.4, borderRadius: 15}}
            source={{uri: id.image}}
          />
        </TouchableOpacity>

        <View
          style={{
            padding: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#D4F5F5',
              justifyContent: 'space-between',
              padding: 10,
              borderRadius: 10,
              width: '95%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, fontWeight: '500', color: 'black'}}>
                50.05k
              </Text>
              <Text style={{fontSize: 10, width: '60%', color: 'black'}}>
                {' '}
                are intrested are you interested in watching this movie
              </Text>
            </View>

            <View
              style={{
                color: 'red',
                fontSize: 10,
                borderWidth: 0.5,
                borderColor: 'red',
                padding: 5,
                borderRadius: 10,
                textAlign: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 10}}>I'm interested</Text>
            </View>
          </View>
        </View>
        {/* section2 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'left',
            gap: 8,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}>
          <Text
            style={{
              color: 'black',
              width: '60%',
              padding: 3,
              backgroundColor: '#D6EAF8',
              borderRadius: 5,
              fontSize: 10,
            }}>
            2D, 2D SCREEN X, MX4D, 4DX, IMAX 2D, ICE
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 10,
              backgroundColor: '#D6EAF8',
              borderRadius: 5,
              padding: 3,
            }}>
            Tamil, English, +2
          </Text>
        </View>
        {/* time */}
        <View style={{paddingHorizontal: 20}}>
          <Text style={{color: 'grey'}}>
            2h 28m . Action, Sci-Fi, Triller.A
          </Text>
          <Text style={{color: 'grey'}}>
            Snatched from the Green Place of Many Mothers, young Furiosa falls
            into the hands of a great biker horde led by the warlord Dementus.
            Sweeping through the Wasteland, they come across the Citadel,
            presided over by the Immortan Joe. As the two tyrants fight for
            dominance, Furiosa soon finds herself in a nonstop battle to make
            her way home.
          </Text>
        </View>

        {/* top section */}
        <View style={style.top}>
          <Text style={{fontSize: 15, color: 'black',paddingHorizontal:17,paddingVertical:15}}>
            Top offers for you
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.div}>
            {topData.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: '#FCF3CF',
                  gap: 10,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: item.image}}
                />
                <Text
                  style={{
                    padding: 7,
                    fontSize: 10,
                    color: 'grey',
                    borderRadius: 5,
                    backgroundColor: 'white',
                  }}>
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={style.line} />

        {/* cast section */}
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, color: 'black'}}>Cast</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.wrap}>
            {castData.map(item => (
              <View
                style={{
                  flexDirection: 'column',
                  gap: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 100}}
                  source={{uri: item.image}}
                />
                <Text style={{color: 'black'}}>{item.name}</Text>
                <Text style={{color: 'grey'}}>as {item.role}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={style.line} />

        {/* cast section */}
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, color: 'black'}}>Crew</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.wrap}>
            {crewData.map(item => (
              <View
                style={{
                  flexDirection: 'column',
                  gap: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 100, height: 100, borderRadius: 100}}
                  source={{uri: item.image}}
                />
                <Text style={{color: 'black'}}>{item.name}</Text>
                <Text style={{color: 'grey'}}>as {item.role}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={style.line} />

        {/* sugetion section */}

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontSize: 15, color: 'black'}}>
              You might also like
            </Text>
            <Icon type="ionicon" name="chevron-forward-outline" />
          </View>

          <Movies />
        </View>
      </ScrollView>

      {/* footer */}

      <View style={style.footer}>
        <TouchableOpacity>
          <View style={style.btn}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 15}}>
              Book tickets
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  btn: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.04,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  line: {
    height: 0.6,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  div: {
    padding: 10,
    gap: 10,
  },
  footer: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {},
  wrap: {
    padding: 5,
    gap: 10,
  },
});
export default About;
