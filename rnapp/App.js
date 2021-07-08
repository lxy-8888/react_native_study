import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Stacknav from './src/navs/stack.js';


export default function App () {
  

     return (
      <NavigationContainer>
       <Stacknav/>
      </NavigationContainer>
    )
   

}
