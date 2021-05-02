import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import {useNavigation} from '@react-navigation/native';
const HeaderHome = (props) => {
  const {title} = props;
  const navigate = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <SafeAreaView style={styles.container} />
      <StatusBar backgroundColor="transparent" translucent={true} />
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Image source={R.images.iconBack} style={styles.imgIcon} />
      </TouchableOpacity>

      <Text style={styles.txtTitle}>{title}</Text>
      <View />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderHome);

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    height: 55,
    backgroundColor: '#0047CC',
    width: '100%',
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  txtTitle: {
    fontSize: getFontXD(52),
    color: R.colors.white,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: 300,
    borderRadius: 20,
  },
});
