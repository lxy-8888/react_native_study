import React from "react";
import {createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import HomeScreen from '../views/Home';
import LoginScreen from '../views/login';
import ListScreen from '../views/List';
import SearchScreen from '../views/Search';
import DetailScreen from '../views/Detail'
import { scaleSize, setSpText } from "../utils/scale";
import Tabnav from './tabnav';

const Stack = createStackNavigator();

export default function Stacknav() {

    return(
       
             <Stack.Navigator initialRouteName="Home" screenOptions={({route})=>{
                 let headerTitle= "首页";
                 if(route.state){
                     if(route.state.index=== 1){
                         headerTitle="榜单"
                     }else if(route.state.index=== 2){
                         headerTitle="我的"
                     }
                 }
                 return{
                     headerStyle:{
                         height:scaleSize(80),
                         borderBottomWidth:0,
                         elevation:0,
                         backgroundColor:'#41bd55'
                     },
                     headerTitleStyle:{
                         fontSize:setSpText(16),
                         fontWeight:'bold'
                     },
                     headerTitle
                 }
             }}>
             <Stack.Screen name="Tabnav" component={Tabnav}/>
         
             <Stack.Screen name="Login" component={LoginScreen} options={{
                // headerShown:false
                title:'登录',
                headerStyle:{
                    borderBottomWidth:0,
                    elevation:0,
                    height:scaleSize(80)
                },
                headerTitleStyle:{
                    fontSize:setSpText(16),
                }
             }} />
             <Stack.Screen name="Search" component={SearchScreen} />
             <Stack.Screen name="List" component={ListScreen} /> 
             <Stack.Screen name="Detail" component={DetailScreen }/>
             </Stack.Navigator>
     
    )
}