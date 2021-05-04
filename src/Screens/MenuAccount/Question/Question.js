import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Question = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Câu hỏi thường gặp'} />
      <Text>Question bao</Text>
    </View>
  );
};
export default Question;
