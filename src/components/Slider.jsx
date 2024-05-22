import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, View} from 'react-native';
import {FlatList} from 'react-native';

const data = [
  {
    id: '01',
    image:
      'https://assets-in.bmscdn.com/promotions/cms/creatives/1714047786506_12angrymenhomebannerweb.jpg',
  },
  {
    id: '02',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAxNC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374973-epcstljhec-portrait.jpg',
  },
  {
    id: '03',
    image:
      'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00395573-mpusldfwkz-portrait.jpg',
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const flatListRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: activeIndex,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [activeIndex]);

  const renderItem = ({item}) => (
    <View>
      <Image
        source={{uri: item.image}}
        style={{width: screenWidth, height: 200}}
      />
    </View>
  );

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderDotIndicators = () => {
    return data.map((item, index) => {
      const scale = animatedValue.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.5, 1],
        extrapolate: 'clamp',
      });

      const opacity = animatedValue.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: 'clamp',
      });

      return (
        <Animated.View
          key={index}
          style={{
            backgroundColor: 'white',
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
            transform: [{scale}],
            opacity,
          }}
        />
      );
    });
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ref={flatListRef}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          bottom: 15,
        }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
}

export default Slider;

