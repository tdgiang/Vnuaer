import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/Header/Header';
const Profile = (props) => {
  return (
    <View>
      <Header isBack={true} title={'Thông tin cá nhân'} />
      <Text>Profile bao</Text>
    </View>
  );
};
export default Profile;
