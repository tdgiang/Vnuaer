import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const CurriculumView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Chương trình đào tạo'} />
      <Text>Thoi khoa bieu</Text>
    </View>
  );
};

export default CurriculumView;
