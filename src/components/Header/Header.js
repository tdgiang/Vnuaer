import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, WIDTH, HEIGHTXD} from '../../config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Block from '../Block';
import {useNavigation} from '@react-navigation/native';
import ModalOption from './ModalOption';
import SnackBar from '../SnackBar';

const HeaderHome = (props) => {
  const {title} = props;

  const navigate = useNavigation();
  const [openSearch, setOpenSearch] = useState(false);
  const [txtSearch, setTxtSearch] = useState('');
  const [isOpenModal, setOpenModal] = useState(false);
  const [isSelected, setSelected] = useState();

  const closeModal = () => {
    setOpenModal(false);
  };
  const openModal = () => {
    setOpenModal(true);
  };

  const toggleSearch = () => {
    setTxtSearch('');
    setOpenSearch(!openSearch);
  };
  const onChangePicker = (value) => {
    setSelected(value);
  };

  const onModalClick = () => {
    setOpenModal(false);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#0062E1', '#22AEFB']}>
      <StatusBar barStyle="light-content" backgroundColor={'#0062E1'} />
      <SnackBar />
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Block center row>
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <Icon name={'chevron-back'} size={30} color={R.colors.white} />
            </TouchableOpacity>

            {openSearch ? (
              <TextInput
                placeholderTextColor={R.colors.placeHolder}
                style={styles.txtInput}
                onChangeText={(val) => setTxtSearch(val)}
                value={txtSearch}
              />
            ) : (
              <Text style={styles.txtTitle}>{title ? title : ''} </Text>
            )}
          </Block>
        </View>
        <TouchableOpacity onPress={toggleSearch}>
          {openSearch ? (
            <Icon
              style={[styles.btnIcon, {marginLeft: 10, marginRight: 20}]}
              name={'refresh-outline'}
              size={20}
              color={R.colors.white}
            />
          ) : (
            <Icon
              style={[styles.btnIcon, {marginLeft: 10, marginRight: 20}]}
              name={'search-sharp'}
              size={20}
              color={R.colors.white}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal}>
          <Icon
            style={styles.btnIcon}
            name={'options'}
            size={20}
            color={R.colors.white}
          />
        </TouchableOpacity>
      </View>
      <ModalOption
        onChangePicker={onChangePicker}
        isOpen={isOpenModal}
        closeModal={closeModal}
        onClick={onModalClick}
      />
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
    marginLeft: 5,
  },
  txt: {fontSize: getFontXD(36), color: R.colors.white},
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: R.colors.white,
  },
  btnIcon: {
    backgroundColor: R.colors.lightBlue2,
    padding: 5,
    borderRadius: 20,
  },
  txtInput: {
    backgroundColor: R.colors.white,
    flex: 1,
    height: HEIGHTXD(139),
    fontSize: getFontXD(42),
    borderRadius: 10,
    color: 'black',
  },
});
