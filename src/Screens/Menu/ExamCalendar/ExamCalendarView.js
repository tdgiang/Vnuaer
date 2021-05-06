import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
const DATA = [
  {
    id: '1',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng.',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'SV001',
    over: '1',
  },
  {
    id: '2',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'SV001',
    over: '0',
  },
  {
    id: '3',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'SV001',
    over: '1',
  },
  {
    id: '4',
    date: '20/02/2021',
    subject: 'Lập trình hướng đối tượng',
    timebegin: '12:45',
    timefinish: '15:30',
    sbd: 'SV001',
    over: '0',
  },
];
const Item = (props) => {
  const {date, subject, timebegin, timefinish, sbd} = props.item;
  return (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.containTime}>
        <Text style={{fontSize: getFontXD(52), marginBottom: 10}}>
          {date.slice(0, 2)}
        </Text>
        <Text style={{fontSize: getFontXD(36)}}>{date.slice(3, 12)}</Text>
      </View>
      <View style={styles.strike}></View>
      <View style={styles.containContent}>
        <Text style={styles.title}>{subject}</Text>
        <View style={styles.subdetail}>
          <Text style={styles.detail}>
            {timebegin}-{timefinish}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.detail}>{sbd}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ExamCalendarView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Lịch thi'} />
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: R.colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  title: {
    color: R.colors.black,
    fontWeight: 'bold',
    fontSize: getFontXD(42),
    marginBottom: 5,
  },
  detail: {
    color: R.colors.main,
    fontSize: getFontXD(36),
  },
  image: {
    justifyContent: 'center',
    height: 50,
    width: 50,
  },

  subdetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  containAll: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
  },
  containContent: {
    flex: 1,
    padding: 10,
    padding: 10,
    marginVertical: 5,
  },
  containTime: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  strike: {
    width: 1,
    backgroundColor: R.colors.borderGray,
  },
});
export default ExamCalendarView;
