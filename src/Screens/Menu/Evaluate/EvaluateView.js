import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const EvaluateView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Đánh giá'} />
      <Text>Thoi khoa bieu</Text>
    </View>
  );
};

export default EvaluateView;
