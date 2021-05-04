import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const TimeTableView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Thời khoá biểu'} />
      <Text>Thoi khoa bieu</Text>
    </View>
  );
};

export default TimeTableView;
