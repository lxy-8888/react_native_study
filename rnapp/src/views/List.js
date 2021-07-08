import React, { PureComponent } from 'react';
import { FlatList,StyleSheet,Text, View,ActivityIndicator} from 'react-native';
import Movieitem from '../compenents/movieitem'
import { scaleSize } from '../utils/scale';
import fetchUtil from '../utils/request.js';
export default class List extends PureComponent {
  state={
    movies:{
      rows:[],
      total:0,
      start:0,
      count:21

    },
    isrefreshing:false
    
  }
  componentDidMount(){
    this.gethot();
  }
  gethot(){
    fetchUtil.getRequest(global.url + '/movies/hot',{
      start:this.state.movies.start,
      count:this.state.movies.count
    })
    .then(msg=>{
      this.setState({
       movies:{
         ...msg,
         rows:[...this.state.movies.rows,...msg.rows]
       }
      })
      
    })
  }
  getmore=()=>{
    this.setState({
      movies:{
        ...this.state.movies,
        start:this.state.movies.start + this.state.movies.count
      }
    },()=>{
      this.gethot();
    })
  }
  footerRender=()=>{
    const {total,rows}=this.state.movies;
    if(rows.length<total){
      return (
        <View style={{alignItems:'center'}}>
          <ActivityIndicator size="large" color="#00ff00"/>
          <Text>正在加载数据...</Text>
        </View>
      )
    }else{
      return(
        <View style={{alignItems:'center'}}>
        <Text>数据加载完毕</Text>
      </View>
      )
    }
    
  }
 
  render() {
  const{movies} = this.state;
  if(movies.rows.length>0){
    return (
      <FlatList 
      style={styles.listwrapper}
      data={movies.rows}
      keyExtractor={(item,index)=>index + ""}
      numColumns={3}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item}) =><Movieitem item={item}/>}
      onEndReachedThreshold={0.2}
      onEndReached={()=>{
        this.getmore();
      }}
      ListFooterComponent={this.footerRender}
      onRefresh={()=>{
        this.setState({
          movies:{
            ...movies,
            rows:[],
            start:0
          },
         // isrefreshing:true
        },()=>{
          this.gethot();
        })
      }}
      refreshing={this.state.isrefreshing}
      />
  );
  }else{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large" color="#00ff00"/>
      </View>
    )
  }
    
  }
}
const styles=StyleSheet.create({
    listwrapper:{
          paddingLeft:scaleSize(40),
          paddingRight:scaleSize(40),
          marginTop:scaleSize(40)
    }
})
