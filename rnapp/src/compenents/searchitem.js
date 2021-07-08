import React, { PureComponent } from 'react';
import {  View, Text,Image,StyleSheet } from 'react-native';
import { scaleSize,setSpText } from '../utils/scale';
import Start from './start';
export default class Searchitem extends PureComponent {
 
  render() {
    return (
        <>
       
      <View style={styles.wrapper}>
         <Image style={styles.movieImage} source={require('../assets/1.jpg')}></Image>
        <View style={styles.movieInfo}>
           <Text style={styles.movieTitle}>除暴</Text>
           <View style={{flexDirection:'row',alignItems:'center'}}>
           <Start/>
           <Text style={{fontSize:setSpText(14)}}>9.0</Text>
           </View>
           <Text style={{color:'#818181',fontSize:setSpText(10)}}>上世纪90年代，刑警钟诚受命追捕悍匪集团“老鹰帮”。这群悍匪犯下惊天连环劫案，训练有素且纪律严明，首领张隼更屡次恶意挑衅，矛头直指钟诚。为将“老鹰帮”捉拿归案，钟诚带领刑警小队咬死不放</Text>
        </View>
      </View>
      </>
    );
  }
}const styles=StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        paddingBottom:scaleSize(30),
        paddingTop:scaleSize(30),
        height:scaleSize(254),
        borderBottomColor:'#d8d8d8',
        borderBottomWidth:scaleSize(1)

    },
    movieImage:{
        width:scaleSize(120),
        height:scaleSize(224),

    },
    movieInfo:{
      height:scaleSize(224),
      marginLeft:scaleSize(30)
    },
    movieTitle:{
        fontSize:setSpText(14),
        fontWeight:'bold'
      },
     
})
