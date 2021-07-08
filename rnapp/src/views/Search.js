import React, { PureComponent } from 'react';
import {  View,ScrollView, TextInput, FlatList, StyleSheet } from 'react-native';
import { scaleSize } from '../utils/scale';
import Searchitem from '../compenents/searchitem.js'
 
export default class Search extends PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={styles.searchBox}>
          <TextInput style={styles.searchInput} placeholder="除暴"></TextInput>
        </View>
        <FlatList style={{paddingLeft:scaleSize(30),paddingRight:scaleSize(30)}}
        data={[{},{},{},{},{},{}]}
        keyExtractor={(item,index)=>index +""}
        renderItem={({item})=><Searchitem/>}
        />
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
    padding:0,
    borderRadius:scaleSize(5),
    borderWidth:scaleSize(1),
    backgroundColor:'rgb(255,255,255)',
    borderColor:'#ccc',
  }

})
