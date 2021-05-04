import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Setting = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Cài đặt'} />
      <Text>Setting bao</Text>
    </View>
  );
};
export default Setting;
