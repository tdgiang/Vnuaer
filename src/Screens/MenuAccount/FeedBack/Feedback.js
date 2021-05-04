import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Feedback = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Phản hồi'} />
      <Text>Feedback bao</Text>
    </View>
  );
};
export default Feedback;
