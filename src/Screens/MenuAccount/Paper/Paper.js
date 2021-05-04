import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Paper = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Giấy tờ'} />
      <Text>Paper bao</Text>
    </View>
  );
};
export default Paper;
