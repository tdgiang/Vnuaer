import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHTXD} from '../../Config/Functions';
const {width, height} = Dimensions.get('window');
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TABBAR} from '../../routers/ScreenNames';

const Login = (props) => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'white'}}
      keyboardVerticalOffset={-50}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground
            source={R.images.bgLogin}
            resizeMode={'stretch'}
            style={{width, height}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  marginTop: 60,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={R.images.logo} style={styles.imgLogo} />
                <View style={styles.container}>
                  <View style={styles.wrapInput}>
                    <Icon
                      name={'infocirlceo'}
                      size={18}
                      color={R.colors.white}
                    />
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Nhập mã sinh viên"
                      placeholderTextColor={R.colors.white}
                      keyboardType={'number-pad'}
                    />
                  </View>

                  <View style={styles.wrapInput}>
                    <Icon name={'lock1'} size={18} color={R.colors.white} />
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Nhập mật khẩu"
                      placeholderTextColor={R.colors.white}
                      secureTextEntry={true}
                    />
                  </View>

                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      width: '100%',
                      marginTop: 20,
                    }}>
                    <TouchableOpacity onPress={() => console.log('Hello')}>
                      <Text
                        style={{
                          fontSize: getFontXD(42),
                          color: R.colors.txtMain,
                        }}>
                        Quên mật khẩu?
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Button
                    title={'Đăng nhập'}
                    onPress={() => navigation.navigate(TABBAR)}
                    buttonStyle={{
                      backgroundColor: '#36BB75',
                      borderRadius: 20,
                      marginTop: 50,
                      height: 45,
                    }}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imgLogo: {
    width: HEIGHTXD(450),
    height: HEIGHTXD(450),
  },
  container: {
    width: '100%',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  txtInput: {
    paddingHorizontal: 10,
    color: R.colors.white,
    flex: 1,
    height: 45,
  },
  wrapInput: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Login;
