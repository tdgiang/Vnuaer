import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const ChangePassword = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Đổi mật khẩu'} />
      <Text>ChangePassword bao</Text>
    </View>
  );
};
export default ChangePassword;
