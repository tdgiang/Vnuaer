import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
const MessView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Tin nhắn'} />
      <Text>Mess view</Text>
    </View>
  );
};

export default MessView;
