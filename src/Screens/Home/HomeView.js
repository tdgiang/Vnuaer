import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import R from '../../assets/R';
import HeaderHome from '../../components/Header/HeaderHome';
import {getFontXD} from '../../Config/Functions';

const HomeView = (props) => {
  const {listItem} = props;
  return (
    <View style={{flex: 1}}>
      <HeaderHome />
      <View style={{marginTop: 30, flex: 1, paddingHorizontal: 10}}>
        <FlatList
          data={listItem}
          horizontal={false}
          numColumns={3}
          columnWrapperStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          renderItem={({item}) => (
            <View style={styles.containerItem}>
              <Image source={R.images.logo} style={styles.imgIcon} />
              <Text style={styles.txtTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 60,
    height: 60,
  },
  containerItem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeView;
