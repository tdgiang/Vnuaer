import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Notificaiton = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Thông báo'} />
      <Text>Thong bao</Text>
    </View>
  );
};
export default Notificaiton;
