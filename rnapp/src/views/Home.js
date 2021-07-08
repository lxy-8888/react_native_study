import React, { PureComponent } from 'react';
import {  View, Text,TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { scaleSize, setSpText } from '../utils/scale';
import Rowlist from '../compenents/rowlist'

export default class Home extends PureComponent {
    
  render() {
    return (
        <ScrollView>
         <View style={styles.searchBox}>
          <TouchableOpacity style={styles.searchInput} activeOpacity={0.9}>
          <Text style={styles.searchText}> 搜索 </Text>
          </TouchableOpacity>
         </View>
         <Rowlist title="影院热映" navigation={this.props.navigation}/>
         <Rowlist title="豆瓣热门" navigation={this.props.navigation}/>
         <Rowlist title="即将上映" navigation={this.props.navigation}/>
         <Rowlist title="近期热门剧集" navigation={this.props.navigation}/>
         <Rowlist title="近期热门综艺"
        // {this.props.route.params.name} 
         navigation={this.props.navigation}/>
         
        </ScrollView>
     
    );
  }
}
const styles=StyleSheet.create({
    searchBox:{
        backgroundColor:'#41bd55',
        padding:scaleSize(16)
    },
    searchInput:{
        width:'100%',
        height:scaleSize(56),
        backgroundColor:'#fff',
        borderRadius:scaleSize(10)
    },
    searchText:{
        textAlign:'center',
        fontSize:setSpText(16),
        lineHeight:scaleSize(56)
    },
})
