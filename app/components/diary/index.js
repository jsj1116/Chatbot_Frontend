/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import DateHead from './dateHead';
// import { styles } from '../../styles/style';

const DiaryComponent = () =>  {

  const [text, setText] = useState('');

  const today = new Date();

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{justifyContent: 'flex-start', padding: 20}}>
        <DateHead date={today}/>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="오늘 하루의 일기를 입력해주세요."
                placeholderTextColor={'grey'}
                style={styles.input}
                multiline
              />
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttext}>저장하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 300,
    fontSize: 16,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7A5ADB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainText: {
    fontFamily: 'Paperlogy-7Bold',
    fontSize: 30,
    padding: 20,
    color: '#7A5ADB',
  },
});

export default DiaryComponent;
