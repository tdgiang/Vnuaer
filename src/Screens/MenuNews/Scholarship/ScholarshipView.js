import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const ScholarshipView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Học bổng'} />
      <Text>Thoi khoa bieu</Text>
    </View>
  );
};

export default ScholarshipView;
