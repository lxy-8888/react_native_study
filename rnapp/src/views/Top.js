import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class Top extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 榜单 </Text>
      </View>
    );
  }
}
