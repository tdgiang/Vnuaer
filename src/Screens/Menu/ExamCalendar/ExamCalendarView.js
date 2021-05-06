import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity, Image } from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
import R from '../../../assets/R';
const DATA = [
  {
    
    date:'20/02/2021',
    subject:'Lập trình hướng đối tượng',
    timebegin:'12:45',
    timefinish:'15:30',
    sbd:'SV001',
    over:'1'
  },
  {
    date:'20/02/2021',
    subject:'Lập trình hướng đối tượng',
    timebegin:'12:45',
    timefinish:'15:30',
    sbd:'SV001',
    over:'0'
  } ,{
    date:'20/02/2021',
    subject:'Lập trình hướng đối tượng',
    timebegin:'12:45',
    timefinish:'15:30',
    sbd:'SV001',
    over:'1'
  },
  {
    date:'20/02/2021',
    subject:'Lập trình hướng đối tượng',
    timebegin:'12:45',
    timefinish:'15:30',
    sbd:'SV001',
    over:'0'
  }
]
const Item = ({ date, subject, timebegin, timefinish, sbd, over}) => (
  <TouchableOpacity style={{flexDirection:'row'}} >
    <View style={{alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20,backgroundColor:R.colors.white}}>
      <Text style={{fontSize:getFontXD(50)}}>{date.slice(0,2)}</Text>
      <Text style={{fontSize:getFontXD(40)}}>{date.slice(3,12)}</Text>
    </View>
    <View style={{borderRightWidth:2,borderRightColor:'red'}}></View>
    <View style={styles.containContent}>
      <Text style={styles.title}>{subject}</Text>
      <View style={styles.subdetail}>
        <Text style={styles.detail}>{timebegin}-{timefinish}</Text>
        <View  style={{flexDirection:'row',alignItems:'center'}} >
          <Text style={styles.detail}>{sbd}</Text>
        </View>
      
      </View>
    </View>
  </TouchableOpacity>
);
const ExamCalendarView = (props) => {
  const renderItem = ({ item }) => (
    <Item date={item.date} sbd={item.sbd} timebegin={item.timebegin} timefinish={item.timefinish} over={item.over} subject={item.subject} />
  );
  return (
    <View style={{flex: 1}}>
      <Header isBack={true} title={'Lịch thi'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.subject}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems:'center',
    padding:10,
    marginVertical:5

  },
  title:{
    color:'black',
    fontWeight:'bold',
    fontSize:getFontXD(50),
  },
  detail:{
    color:R.colors.main,
    fontSize:getFontXD(40),
   
  },
  image:{
    justifyContent:'center',
    height:50,
    width:50, 
  },
 
  subdetail:{
    justifyContent:"space-between",
    flexDirection:'row',
    marginTop:5,
    
  },
  containAll:{
    flex:1,
    margin:10,
    
    borderRadius:5,
  },
  containContent:{
    flex:1,
    padding:10,
    borderTopLeftRadius:20,borderBottomLeftRadius:20
  }
})
export default ExamCalendarView;
