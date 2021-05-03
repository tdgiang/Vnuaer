import React, {Component} from 'react';
import {View, Text} from 'react-native';
import R from '../../assets/R';
import HomeView from './HomeView';

const listItem = [
  {
    id: '1',
    title: 'Thời khoá biểu',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '2',
    title: 'Kết quả học tập',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '3',
    title: 'Lịch thi',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '4',
    title: 'Tài chính',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '5',
    title: 'Đăng ký tín chỉ',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '6',
    title: 'Đánh giá',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '7',
    title: 'Chương trình đào tạo',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '8',
    title: 'Khảo sát',
    screen: 'TKB',
    icon: R.images.logo,
  },
  {
    id: '9',
    title: 'Tốt nghiệp',
    screen: 'TKB',
    icon: R.images.logo,
  },
];

const Home = (props) => {
  return <HomeView listItem={listItem} />;
};

export default Home;
