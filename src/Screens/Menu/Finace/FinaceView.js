import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const FinaceView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Tài chính'} />
      <Text>FinaceView khoa bieu</Text>
    </View>
  );
};

export default FinaceView;
