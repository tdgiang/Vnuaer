import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import R from '../../assets/R';
import {getFontXD} from '../../Config/Functions';
const Item = (props) => {
  const {title, description, icon} = props.item;
  return (
    <View style={styles.container}>
      <Image style={styles.imgIcon} source={icon} resizeMode={'cover'} />
      <View style={styles.wrapContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.txt}>{description}</Text>
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
    borderRadius: 5,
    shadowColor: R.colors.black,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    marginTop: 15,
  },
  imgIcon: {
    width: 80,
    height: 80,
  },
  wrapContent: {
    paddingLeft: 20,
    height: 50,
  },
  title: {
    fontSize: getFontXD(52),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txt: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
  },
});

export default Item;
