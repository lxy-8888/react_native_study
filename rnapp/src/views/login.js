import React, { PureComponent } from 'react';
import {  View, Text,TextInput ,StyleSheet, TouchableOpacity} from 'react-native';
import { scaleSize, setSpText } from '../utils/scale';
import fetchUtil from "../utils/request.js"

export default class Login extends PureComponent {
 state={
   username:'',
   password:''
 }
  login=()=>{
    fetchUtil.postRequest(global.url+'/users/login',{
      username:this.state.username,
      password:this.state.password
    }).then(msg=>{
     this.props.navigation.navigate('Tabnav',{name:"首页"});
    })
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.temp}></View>
        <Text style={styles.title}>豆瓣账号密码登录</Text>
        <View style={styles.inputw}>
        <TextInput  placeholder="手机号/邮箱" 
        onChangeText={text=>{
          this.setState({
            username:text
          })
        }}
        style={{borderBottomColor:'#ccc',borderWidth:scaleSize(1)}} ></TextInput>
        <TextInput  placeholder="密码" 
        onChangeText={text=>{
          this.setState({
            password:text
          })
        }}
        ></TextInput>
        </View>
        <TouchableOpacity onPress={this.login} >
          <Text style={styles.loginBtn}>登录</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:scaleSize(68)}}> 
          <Text style={styles.others}> 短信验证码登录/注册</Text>
          <Text style={styles.others}>海外手机密码登录</Text>
        </View>
        <View style={styles.temp}></View>
        <Text style={styles.find}>忘记密码，找回密码</Text>
      </View>
    );
  }
}
 const styles=StyleSheet.create({
   container:{
       padding:scaleSize(40),
       flex:1,
       backgroundColor:'#fff'

   },
   title:{
    fontSize:setSpText(30),
    textAlign:'center',
    fontWeight:'400'
  },
     inputw:{
      borderColor:'#ccc',
      borderRadius:scaleSize(20),
      borderWidth:scaleSize(1),
      marginBottom:scaleSize(40),
      marginTop:scaleSize(100)

     },
    
     loginBtn:{
       backgroundColor:'#a1dfab',
       color:'#fff',
       height:scaleSize(88),
       borderRadius:scaleSize(10),
       lineHeight:scaleSize(88),
       textAlign:'center',
       fontSize:setSpText(20)

     },
  
     others:{
       fontSize:setSpText(16),
       color:'#29ba4c'
     },
     find:{
       textAlign:'center',
       color:'#586396',
       fontSize:setSpText(20)
     },
     temp:{
       flexGrow:1
     },
     
    
     
 })