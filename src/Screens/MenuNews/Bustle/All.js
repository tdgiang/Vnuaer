import React from 'react';
import { 
  SafeAreaView,
  View,
  FlatList, 
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity } from 'react-native';
import {getFontXD} from '../../../Config/Functions';
const DATA = [
  {
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  },
  {
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  },
  {
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  }
  ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  }
  ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  }
   ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  } ,{
    timestart:'00:00 28/04/21',
    timefinish:'00:00 22/05/21',
    title:'Giải chạy Sinh Viên Học Viện Nông Nghiệp Hoàng Gia -VNuaRunning'
  }
]

const Item = ({ title, timestart, timefinish}) => (
    <TouchableOpacity style={styles.container}>
    <View style={styles.containTime}>
      <Text style={styles.weekday}>TH {timestart.slice(9,11)}</Text>
      <Text style={styles.date}>{timestart.slice(5,8)}</Text>
    </View>
    <View style={styles.containContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{timestart}- {timefinish}</Text>
    </View></TouchableOpacity>
);

const All = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} timestart={item.timestart} timefinish={item.timefinish}/>
  );

  return (
      <FlatList
       showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',

  },
  title:{
    color:'black',
    fontSize:getFontXD(42),
  },
  time:{
    color:'gray',
    fontSize:15,
  },
  date:{
    color:'red',
    fontSize:25
  },
  weekday:{
    color:'gray',
    fontSize:15
  },
  containTime:{
    justifyContent:'center',
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:10,
  },
  containAll:{
    flex:1
  },
  containContent:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  }
});
export default All;