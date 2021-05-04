import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';

const ExamCalendarView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Lịch thi'} />
      <Text>ExamCalendarView khoa bieu</Text>
    </View>
  );
};

export default ExamCalendarView;
