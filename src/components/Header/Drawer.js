import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import R from '../../assets/R';
import {HEIGHTXD, getFontXD, WIDTHXD} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {
  AccountVerification,
  METHODPAY,
  SERVICECUSTOMER,
  FEEDBACK,
  SETTING,
  NOTIFICATION,
  AUTHEN,
  PROFILE,
  CONTRACT,
  LEGALDOCUMENT,
  MYGROUP,
  PAYMENTS,
  DEPOSIT,
  WITHDRAW,
  ROSE,
  HISTORY,
  CHOOSEMETHOD,
} from '../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AppText from '../AppText';
import images from '../../assets/images';

const menus = [
  {
    id: '1',
    title: 'Profile',
    icon: R.images.iconUserCheck,
    screen: AccountVerification,
    active: false,
    children: [
      {
        id: '11',
        title: 'MyProfile',
        icon: R.images.iconUserCheck,
        screen: PROFILE,
      },
      {
        id: '12',
        title: 'VerifyAccount',
        icon: R.images.iconUserCheck,
        screen: AccountVerification,
      },
      {
        id: '15',
        title: 'MyPartner',
        icon: R.images.iconUserCheck,
        screen: MYGROUP,
      },
      {
        id: '13',
        title: 'Payments',
        icon: R.images.iconUserCheck,
        screen: PAYMENTS,
      },
      {
        id: '14',
        title: 'Contract',
        icon: R.images.iconUserCheck,
        screen: CONTRACT,
      },
    ],
  },
  {
    id: '6',
    title: 'Finance',
    icon: R.images.iconContract,
    screen: CONTRACT,
    active: false,
    children: [
      {
        id: '61',
        title: 'Deposit',
        icon: R.images.iconUserCheck,
        screen: CHOOSEMETHOD,
      },
      {
        id: '62',
        title: 'Withdraw',
        icon: R.images.iconUserCheck,
        screen: WITHDRAW,
      },
      {
        id: '63',
        title: 'Rose',
        icon: R.images.iconUserCheck,
        screen: ROSE,
      },
      {
        id: '64',
        title: 'History',
        icon: R.images.iconUserCheck,
        screen: HISTORY,
      },
    ],
  },
  {
    id: '8',
    title: 'Support',
    icon: R.images.iconContract,
    screen: CONTRACT,
    active: false,
    children: [
      {
        title: 'CustomerCare',
        icon: R.images.iconPhone,
        screen: SERVICECUSTOMER,
        id: '81',
      },
      {
        id: '82',
        title: 'Feedback',
        icon: R.images.iconUserCheck,
        screen: FEEDBACK,
      },
      {
        id: '83',
        title: 'LegalDocument',
        icon: R.images.iconUserCheck,
        screen: LEGALDOCUMENT,
      },
    ],
  },

  {
    id: '2',
    title: 'PaymentSetting',
    icon: R.images.iconMethodPay,
    screen: METHODPAY,
    active: false,
    children: null,
  },
  {
    id: '5',
    title: 'Setting',
    icon: R.images.iconSetting,
    screen: SETTING,
    active: false,
    children: null,
  },
];

const Drawer = (props) => {
  const navigate = useNavigation();
  const [listMenu, setListMenu] = useState(menus);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={R.images.avartar} style={styles.imgAvatar} />
        <TouchableOpacity
          onPress={() => {
            props.toggleModal();
            navigate.navigate(PROFILE);
          }}>
          <Text style={styles.txtTop}>{props.user.fullname}</Text>
          <Text>{props.user.user_id}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.toggleModal();
            navigate.navigate(PROFILE);
          }}>
          <Image source={R.images.iconRight2} style={styles.imgIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        {listMenu.map((e) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                if (e.children) {
                  const newList = listMenu.map((temp) => {
                    if (temp.id == e.id) return {...temp, active: !temp.active};
                    return temp;
                  });

                  setListMenu(newList);
                } else {
                  navigate.navigate(e.screen);
                  props.toggleModal();
                }
              }}
              key={e.id}
              style={styles.containerItem}>
              <View style={styles.row}>
                <Image source={e.icon} style={styles.imgIcon} />
                <AppText
                  i18nKey={e.title}
                  style={[
                    styles.txtTitle,
                    e.children ? {fontWeight: 'bold'} : null,
                    e.active ? {color: R.colors.main} : null,
                  ]}></AppText>
              </View>

              {e.children ? (
                <Image
                  source={e.active ? images.iconUp : images.iconDown}
                  style={styles.imgIcon}
                />
              ) : null}
            </TouchableOpacity>
            {e.active && e.children ? (
              <View style={{marginLeft: 15}}>
                {e.children.map((item) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigate.navigate(item.screen);
                      props.toggleModal();
                    }}
                    key={item.id}
                    style={styles.containerItem}>
                    <Image source={item.icon} style={styles.imgIcon} />
                    <AppText
                      i18nKey={item.title}
                      style={styles.txtTitle}></AppText>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          AsyncStorage.clear();
          props.toggleModal();
          navigate.reset({
            index: 1,
            routes: [{name: AUTHEN}],
          });
        }}
        style={styles.footer}>
        <Icon name={'logout'} size={25} color={'#F81515'} />
        <AppText i18nKey={'Logout'} Logout style={styles.txtTitle}></AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: WIDTHXD(64),
    borderColor: '#C9D3FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  body: {
    flex: 1,

    marginVertical: 30,
  },
  imgAvatar: {
    width: WIDTHXD(140),
    height: WIDTHXD(140),
    borderRadius: WIDTHXD(100),
  },
  imgIcon: {
    width: WIDTHXD(62),
    height: HEIGHTXD(52),
    resizeMode: 'contain',
  },
  txtTitle: {
    fontSize: getFontXD(36),
    marginLeft: 10,
    color: '#0C0D2C',
  },
  txtTop: {
    fontSize: getFontXD(42),
    color: '#1E2F70',
  },
  txtLink: {
    fontSize: getFontXD(36),
    color: '#929292',
  },

  footer: {
    paddingVertical: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: WIDTHXD(75),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: WIDTHXD(75),

    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  row: {flexDirection: 'row', flex: 1, alignItems: 'center'},
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(Drawer);
