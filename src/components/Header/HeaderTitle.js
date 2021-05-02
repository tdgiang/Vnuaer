import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD} from '../../config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import  SnackBar from '../SnackBar'

const HeaderHome = (props) => {
  const {title, back} = props;

  const navigate = useNavigation();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#0062E1', '#22AEFB']}>
      <StatusBar barStyle="light-content" backgroundColor={'#0062E1'} />
      <SnackBar />
      <View style={styles.container}>
        {back ? (
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Icon name={'chevron-back'} size={30} color={R.colors.white} />
          </TouchableOpacity>
        ) : null}

        <View style={{marginLeft: 10}}>
          <Text style={styles.txtTitle}>{title ? title : ''}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    height: 55,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: getFontXD(52),
    color: R.colors.white,
    fontWeight: 'bold',
  },
  txt: {fontSize: getFontXD(36), color: R.colors.white},
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: R.colors.white,
  },
});
