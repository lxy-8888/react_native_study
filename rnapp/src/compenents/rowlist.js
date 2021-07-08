import React, { PureComponent } from 'react';
import {  View, Text,TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { scaleSize} from '../utils/scale';
import Movieitem from './movieitem';
import fetchUtil from '../utils/request.js';

export default class Rowlist extends PureComponent {
   static defaultProps={
     title:"影院热映"
   }
   state={
     movies:[]
   }
   componentDidMount(){
     if(this.props.title==="影院热映"){
      this.gethot();
     }else if(this.props.title==="豆瓣热门"){
       this.getcoming();
     }else{
       this.gethot();
     }
  
    
   }
   gethot(){
     fetchUtil.getRequest(global.url+"/movies/hot")
     .then(msg=>{
       this.setState({
         movies:msg.rows
       })
     })
   }
   getcoming(){
     fetchUtil.getRequest(global.url+"/movies/coming")
      .then(msg=>{
        this.setState({
          movies:msg.rows
        })
      })
   }
  render() {
    const {title}=this.props;
    return (
        <>
      {/* 影院热映*/}
<View>
      {/* 标题*/}
     <View style={styles.titlew}>
         <Text style={{color:'#494949',fontWeight:'bold'}}>{title}</Text>
         <TouchableOpacity onPress={()=>{
           this.props.navigation.navigate('List')
         }}>
             <Text style={{color:'#41bd55'}}>查看更多</Text>
         </TouchableOpacity>
     </View>
      {/* 列表*/}
     
     <FlatList style={{paddingLeft:scaleSize(15)}}
      data={this.state.movies}
      keyExtractor={(item,index)=>index+""}
      horizontal={true}
      renderItem={({item}) =><Movieitem item={item}/>}
      showsHorizontalScrollIndicator={false}
      />
     
</View>

       </>
    );
  }
}
const styles=StyleSheet.create({
    titlew:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:scaleSize(30)
    },
    
})