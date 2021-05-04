import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
const Item = (props) => {
  const {title, icon, id} = props.item;
  return (
    <View key={id} style={styles.container}>
      <Image style={styles.imgIcon} source={icon} resizeMode={'cover'} />
      <View style={styles.wrapContent}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={'right'} size={16} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    marginBottom: 1,
  },
  imgIcon: {
    width: 35,
    height: 35,
  },
  wrapContent: {
    paddingLeft: 15,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: getFontXD(46),
  },
  txt: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
});

export default Item;
