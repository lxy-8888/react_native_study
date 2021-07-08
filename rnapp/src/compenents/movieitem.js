import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { scaleSize, setSpText } from '../utils/scale';
import {useNavigation} from "@react-navigation/native"
import Start from './start'

export default function Movieitem(props){
    const {title,movieImg,average,stars,_id}=props.item;
    const navigation= useNavigation();
    return (
        <>
      
      <TouchableOpacity activeOpacity={0.9} style={styles.movieWrapper} onPress={()=>{
         navigation.navigate('Detail',{_id})

      }
        
      }>
        
         <Image style={styles.movieImage} source={{uri: movieImg}}></Image>
         <Text numberOfLines={1} ellipsizeMode="tail" style={styles.movieTitle}>{title}</Text>
   
     
        <View style={styles.wrapper}>
           <Start stars={stars}/>
           <Text style={{fontSize:setSpText(10)}}>{average}</Text>
        </View>
      </TouchableOpacity>
      </>
    );
  }

const styles=StyleSheet.create({
    
    movieImage:{
      width:scaleSize(200),
      height:scaleSize(250),
      borderRadius:scaleSize(5)
    },
    movieTitle:{
      fontSize:setSpText(12),
      fontWeight:'bold'
    },
    movieWrapper:{
      width:scaleSize(200),
      marginLeft:scaleSize(15),
      marginRight:scaleSize(15)
    },
    wrapper:{
      flexDirection:'row',
      width:scaleSize(160),
      justifyContent:'space-between',
      marginLeft:scaleSize(15),
  },
})
