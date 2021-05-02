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
import Modal from 'react-native-modal';
import Drawer from './Drawer';
import AppText from '../../components/AppText';

const HeaderHome = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.img}
      source={R.images.bgHeader}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <Image source={R.images.iconMenu} style={styles.imgIcon} />
        </TouchableOpacity>

        <AppText i18nKey={'Account'} style={styles.txtTitle}></AppText>
        <View style={styles.imgIcon} />
      </View>
      <Modal
        animationIn={'fadeInLeft'}
        animationOut={'fadeOutLeft'}
        style={{marginLeft: 20}}
        isVisible={isModalVisible}
        backdropOpacity={0.5}>
        <View
          style={[
            {flex: 1, flexDirection: 'row'},
            Platform.OS == 'ios' ? {paddingVertical: 15} : {},
          ]}>
          <View style={styles.container}>
            <Drawer toggleModal={toggleModal} />
          </View>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View
              style={{
                flex: 1,
              }}></View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HeaderHome);

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
});
