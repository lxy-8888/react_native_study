import React from 'react';
import { Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/Home.js';
import TopScreen  from '../views/Top.js';
import MineScreen from '../views/Mine.js';
import {scaleSize,setSpText} from '../utils/scale';

import Onhome from "../assets/onhome.jpg";
import Offhome from "../assets/offhome.jpg";
import Ontop from "../assets/ontop.jpg";
import Offtop from "../assets/offtop.jpg";
import Onm from "../assets/onm.jpg";
import Offm from "../assets/offm.jpg";

const Tab =createBottomTabNavigator();
export default function Tabnav() {
    return (
      
        <Tab.Navigator
            screenOptions={({route})=>{
                return{
                    tabBarIcon:({focused,color,size})=>{
                        let iconImage= focused ? Onhome:Offhome;
                        if(route.name==='Top'){
                            iconImage= focused ? Ontop: Offtop;
                        }else if(route.name==='Mine'){
                            iconImage= focused ? Onm :Offm  ;
                        }
                        return <Image style={{ width:scaleSize(50),height:scaleSize(50)}} source={iconImage} ></Image>
                    },
                }
            }}
            tabBarOptions={{
                activeTintColor:'green',
                inactiveTintColor:'#bbb'
            }}
        >

          <Tab.Screen name="Home" component={HomeScreen}  initialParams={{name:"首页"}}  
           options={({route})=>{
                return {
                   title:"首页",
                    headerStyle:{
                       borderBottomWidth:0,
                      elevation:0,
                       height:scaleSize(80),
                       backgroundColor:'#41bd55'
                      
},
                   headerTitleStyle:{
                   fontSize:setSpText(16), 
                   },
                   headerTintColor:'#fff'
                }
             }}
           />
          <Tab.Screen name="Top" component={TopScreen} options={{title:"榜单"}}/>
          <Tab.Screen name="Mine" component={MineScreen} options={{title:"我的"}}/>
        </Tab.Navigator>
     
    );
  }
