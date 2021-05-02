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
  TextInput,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {HEIGHTXD} from '../../Config/Functions';
import SnackBar from '../SnackBar';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import AppText from '../AppText';

const HeaderSearch = (props) => {
  const {title, isWhite} = props;

  const [openSearch, setOpenSearch] = useState(false);
  const [txtSearch, setTxtSearch] = useState('');
  const toggleSearch = () => {
    setTxtSearch('');
    setOpenSearch(!openSearch);
  };
  const navigate = useNavigation();

  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={[styles.img, isWhite ? {backgroundColor: 'white'} : {}]}
      source={R.images.bgHeader}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SnackBar />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{width: 35, height: 30}}
          onPress={() => navigate.goBack()}>
          <Image source={R.images.iconBack} style={styles.imgBack} />
        </TouchableOpacity>

        {openSearch ? (
          <TextInput
            placeholderTextColor={R.colors.placeHolder}
            style={styles.txtInput}
            onChangeText={(val) => setTxtSearch(val)}
            value={txtSearch}
          />
        ) : (
          <AppText i18nKey={title} style={styles.txtTitle}></AppText>
        )}
        <TouchableOpacity onPress={toggleSearch}>
          {openSearch ? (
            <Icon name={'refresh-outline'} size={28} color={R.colors.white} />
          ) : (
            <Icon name={'search-sharp'} size={28} color={R.colors.white} />
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderSearch);

const styles = StyleSheet.create({
  img: {
    height: 95,
    width: '100%',

    paddingTop: 30,
  },
  headerContainer: {
    height: 40,
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  imgBack: {
    width: 30,
    height: 30,
  },
  imgIcon: {
    width: 25,
    height: 20,
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
  txtInput: {
    backgroundColor: R.colors.white,
    flex: 1,
    padding: 2,
    height: HEIGHTXD(100),
    fontSize: getFontXD(42),
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  btnIcon: {
    backgroundColor: R.colors.lightBlue2,
    padding: 5,
  },
});
