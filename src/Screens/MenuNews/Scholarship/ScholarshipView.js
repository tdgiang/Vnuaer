 

import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity, Image } from 'react-native';
import {getFontXD} from '../../../Config/Functions';
import Header from '../../../components/Header/Header';
const DATA = [
  {
    
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  },
  {
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  },
  {
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  }
  ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  }
  ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  }
   ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,
  {
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  } ,{
    image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  },
  {
   image:'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
    time:'22/05/21',
    title:'Chương trình học bổng- 2021',
    type:'Học bổng doanh nghiệp',
    price:'600 USD/suất'
  }
]

const Item = ({ title, image, time, type, price}) => (
    <TouchableOpacity style={styles.container}>
    <View style={styles.containImage}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://tintuc.taichinhduhoc.com.vn/wp-content/uploads/2020/01/hoc-bong-du-hoc-uc.jpg',
        }}
      />
    </View>
    <View style={styles.containContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{type}</Text>
      <View style={styles.subdetail}>
        <Text style={styles.detail}>{time}</Text>
        <Text style={styles.detail}>{price}</Text>
      </View>
    </View></TouchableOpacity>
);

const ScholarshipView = (props) => {
  const renderItem = ({ item }) => (
    <Item image={item.image} title={item.title} type={item.type} time={item.time} price={item.price} />
  );

  return (
    <View style={{flex:1}} >
     <Header isBack={true} title={'Hoạt động'} />
     <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
      
    </View>
     
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingVertical:10
  },
  title:{
    color:'black',
    fontWeight:'bold',
  },
  detail:{
    color:'gray',
    fontSize:15,
  },
  image:{
    justifyContent:'center',
    height:50,
    width:50, 
  },
  containImage:{
    justifyContent:'center',
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:15,
  },
  subdetail:{
    justifyContent:"space-between",
    flexDirection:'row'
  },
  containAll:{
    flex:1
  },
  containContent:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  }
})
export default ScholarshipView;

