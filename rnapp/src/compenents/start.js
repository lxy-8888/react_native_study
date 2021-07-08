import React, { PureComponent } from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { scaleSize} from '../utils/scale';
 const onimage=require('../assets/on.jpg')
 const halfimage=require('../assets/half.jpg')
 const offimage=require('../assets/off.jpg')
export default class start extends PureComponent {
  static defaultProps={
    stars:'25'
  }
  getstars(){
    const starsArr=[];
    const { stars }=this.props;
    //满星的数量
    const on= stars[0];
    for(let i=0; i<on; i++){
      starsArr.push(onimage);
    }
    const half=stars[1];
    if(half==='5'){
      starsArr.push(halfimage);
    }
    for(let i=starsArr.length; i<5; i++){
      starsArr.push(offimage);
    }
    return starsArr;
  }

  render() {
    return (
      
        <View style={{flexDirection:'row'}}> 
        {
          this.getstars().map((item,index)=><Image style={styles.startImage} key={index} source={item}/>)
        }
      
        </View>
        
        
     
    );
  }
}
const styles=StyleSheet.create({
  
    startImage:{
        width:scaleSize(22),
        height:scaleSize(22)
    }
    
    
})