import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import fetchUtil from '../utils/request.js';


export default class Detail extends PureComponent {
    state={
        movie:{}
    }
 componentDidMount(){
     fetchUtil
     .getRequest(global.url+'/movies/detail',{_id:this.props.route.params._id})
     .then(([msg]) => {
         this.setState({
             movie:msg
         },()=>{
             this.props.navigation.setOptions({title:this.state.movie.title})
         })

     })
 }

  render() {
    return (
      <View>
        <Text>{this.state.movie.title} </Text>
      </View>
    );
  }
}
