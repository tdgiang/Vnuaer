import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
const NewsView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Tin tức'} />
      <Text>NewsView</Text>
    </View>
  );
};

export default NewsView;
