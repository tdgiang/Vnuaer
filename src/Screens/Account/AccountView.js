import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';

const AccountView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Tài khoản'} />
      <Text>Account view</Text>
    </View>
  );
};

export default AccountView;
