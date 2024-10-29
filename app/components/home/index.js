import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Image } from 'react-native';
// import { styles } from '../../styles/style';
import CalendarTab from './calendarTab';
import WeatherImage from '../../assets/images/sunny.jpg'

function HomeComponent() {

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Text>Today's My Weather</Text>
          <TextInput
          style={styles.input}
          placeholder="오늘의 날씨가 입력되지 않았어요."
          multiline={true}
          />
        </View>
        <View style={styles.image}>
          <Image
              source={WeatherImage}
              resizeMode={'contain'}
              style={{
                  width: 150
              }}
          />      
        </View>
      </View>
      <CalendarTab/>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: 250,
    height: 100,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginTop: 20
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default HomeComponent;
