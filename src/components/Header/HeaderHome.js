import React, {useEffect, useState} from 'react';
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
  Alert,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHT, WIDTHXD} from '../../Config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {HEIGHTXD, toPriceVnd} from '../../Config/Functions';
import Clipboard from '@react-native-clipboard/clipboard';
import SnackBar from '../SnackBar';
import {useNavigation} from '@react-navigation/native';
import I18n from '../../helper/i18/i18n';
import AppText from '../../components/AppText';

import {
  WITHDRAW,
  DEPOSIT,
  CHOOSEMETHOD,
  TRANSFER,
  HISTORY,
  PROFILE,
  AccountVerification,
  WALLETWITHDRAW,
  PACKETCQG,
} from '../../routers/ScreenNames';

const renderWallet = (status, current_money, current_cqg_money, contract) => {
  const navigate = useNavigation();
  if (status == 6)
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.containerWallet}>
          <AppText i18nKey={'AccountWallet'} style={styles.txtWallet}></AppText>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtMoney}>
              {current_money == 0 ? 0 : toPriceVnd(current_money)}
            </Text>
            <Text style={styles.txtUnit}>Đ</Text>
          </View>
        </View>
        <View style={{width: 1, backgroundColor: '#EDEDF1', height: '100%'}} />
        <View style={styles.containerWallet}>
          <AppText i18nKey={'AccountCQG'} style={styles.txtWallet}></AppText>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtMoney}>
              {current_cqg_money == 0 ? 0 : toPriceVnd(current_cqg_money)}
            </Text>
            <Text style={styles.txtUnit}>Đ</Text>
          </View>
        </View>
      </View>
    );
  if (status == 5)
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.containerWallet}>
          <AppText i18nKey={'AccountWallet'} style={styles.txtWallet}></AppText>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtMoney}>
              {current_money == 0 ? 0 : toPriceVnd(current_money)}
            </Text>
            <Text style={styles.txtUnit}>Đ</Text>
          </View>
        </View>
        <View style={{width: 1, backgroundColor: '#EDEDF1', height: '100%'}} />
        <View style={styles.containerWallet}>
          <AppText
            i18nKey={'WaitOpenCQG'}
            style={[styles.txtWhite, {color: '#FFB721'}]}></AppText>
        </View>
      </View>
    );
  if (status == 3)
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.containerWallet}>
          <AppText i18nKey={'AccountWallet'} style={styles.txtWallet}></AppText>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtMoney}>
              {' '}
              {current_money == 0 ? 0 : toPriceVnd(current_money)}
            </Text>
            <Text style={styles.txtUnit}>Đ</Text>
          </View>
        </View>
        <View style={{width: 1, backgroundColor: '#EDEDF1', height: '100%'}} />

        <View style={styles.containerWallet}>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate(PACKETCQG);
            }}
            style={styles.btn}>
            <AppText
              i18nKey={'OpenAccountCQG'}
              style={styles.txtWhite}></AppText>
          </TouchableOpacity>
        </View>
      </View>
    );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        disabled={status == 2 ? true : false}
        onPress={() => navigate.navigate(AccountVerification)}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          style={{
            width: 320,
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={R.images.iconBtnGreen}>
          {status == 2 ? (
            <AppText
              i18nKey={'WaitVerification'}
              style={{fontSize: getFontXD(52), color: 'white'}}></AppText>
          ) : (
            <AppText
              i18nKey={'AccountVerify'}
              style={{fontSize: getFontXD(52), color: 'white'}}></AppText>
          )}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const renderLabel = (status) => {
  if (status == 1)
    return (
      <AppText i18nKey={'NotVerified'} style={{color: '#E3434F'}}></AppText>
    );
  if (status == 2)
    return <AppText i18nKey={'Verified'} style={{color: '#FFB721'}}></AppText>;
  if (status == 3)
    return (
      <AppText
        i18nKey={'WaitVerification'}
        style={{color: '#17B217'}}></AppText>
    );
};

const HeaderHome = (props) => {
  const navigate = useNavigation();

  const copyToClipboard = () => {
    Alert.alert(I18n.t('Notification'), I18n.t('CopyLink'));
    Clipboard.setString(props.user.sponsor_url);
  };

  return (
    <View style={styles.container}>
      <SnackBar />
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.containerTop}>
          <View style={styles.containerInfor}>
            <Image source={R.images.avartar} style={styles.imgAvatar} />
            <View style={styles.wrapRight}>
              <TouchableOpacity onPress={() => navigate.navigate(PROFILE)}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.txtName}>{props.user.fullname}</Text>
                  {props.user.status == 3 ? (
                    <Image
                      source={R.images.iconCheck}
                      style={{width: 20, height: 20, marginLeft: 20}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>

              <View style={styles.row1}>
                <Text style={styles.txtlink}>ID:{props.user.user_id}</Text>
                <TouchableOpacity onPress={copyToClipboard}>
                  <Image
                    source={R.images.iconCopy}
                    style={styles.imgIconCopy}
                  />
                </TouchableOpacity>
              </View>
              {renderLabel(props.user.status)}
            </View>
          </View>

          <View style={styles.wrapWallet}>
            {renderWallet(
              props.user.status,
              props.user.current_money,
              props.user.current_cqg_money,
              props.user.contract_code,
            )}
          </View>
          <View style={styles.containerMenu}>
            <TouchableOpacity
              onPress={() => navigate.navigate(CHOOSEMETHOD)}
              style={styles.wraper}>
              <Image style={styles.imgIcon} source={R.images.iconRecharge} />
              <AppText i18nKey={'Deposit'} style={styles.txt} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate.navigate(WALLETWITHDRAW)}
              style={styles.wraper}>
              <Image style={styles.imgIcon} source={R.images.iconWithdrawal} />
              <AppText i18nKey={'Withdraw'} style={styles.txt} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate(TRANSFER)}
              style={styles.wraper}>
              <Image style={styles.imgIcon} source={R.images.iconTransfer} />
              <AppText i18nKey={'Transfer'} style={styles.txt} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate(HISTORY)}
              style={styles.wraper}>
              <Image style={styles.imgIcon} source={R.images.iconHistory} />
              <AppText i18nKey={'History'} style={styles.txt} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  container: {},
  wrapWallet: {
    height: 80,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDF1',
  },
  img: {
    height: Platform.OS == 'ios' ? HEIGHTXD(728) : HEIGHTXD(808),
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTop: {
    backgroundColor: 'white',
    height: 290,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginTop: HEIGHTXD(150),
  },
  containerMenu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  wraper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcon: {
    width: WIDTHXD(134),
    height: HEIGHTXD(134),
    marginBottom: 10,
    resizeMode: 'contain',
  },
  imgIconCopy: {
    width: WIDTHXD(134),
    height: HEIGHTXD(134),

    resizeMode: 'contain',
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.txtMain,
  },
  txtWallet: {
    fontSize: getFontXD(36),
    color: R.colors.txtMain,
    marginBottom: 5,
  },
  txtName: {
    fontSize: getFontXD(52),
    color: '#00359C',
  },
  txtlink: {
    fontSize: getFontXD(42),
    color: '#A2A2A2',
  },
  imgAvatar: {
    width: WIDTHXD(240),
    height: WIDTHXD(240),
    borderRadius: WIDTHXD(120),
  },
  txtMoney: {
    fontSize: getFontXD(62),
    color: '#FFB721',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: '#A2A2A2',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 5,
  },
  wrapRight: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerInfor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDF1',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerWallet: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  txtMoney: {
    fontSize: getFontXD(46),
    color: '#FFB721',
  },
  txtUnit: {
    fontSize: getFontXD(46),
    marginLeft: 10,
    color: '#A2A2A2',
  },
  txtWhite: {
    fontSize: getFontXD(36),
    color: R.colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: R.colors.main,
    borderRadius: 10,
    shadowColor: '#AFA9A9',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 1,
  },
});
