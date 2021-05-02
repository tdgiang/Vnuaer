import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import R from '../assets/R';
import {colors, sizes} from '../assets/theme';
import {getFontXD, HEIGHTXD, WIDTHXD} from '../Config/Functions';

const Button = (props) => {
  const {title, onClick} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <ImageBackground
        resizeMode={'cover'}
        style={{
          height: 50,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        source={R.images.bgBtn}>
        <Text style={styles.txt}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: HEIGHTXD(150),

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: getFontXD(48),
    textTransform: 'uppercase',
    color: R.colors.white,
    fontWeight: 'bold',
  },
});
