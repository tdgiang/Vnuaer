import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const ServeyView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Khảo sát'} />
      <Text>ServeyView khoa bieu</Text>
    </View>
  );
};

export default ServeyView;
