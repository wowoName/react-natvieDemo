import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

/** 
 * 图片使用
 * 网络图片：source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
 * 本地图片：source={require('./../images/bill.png')}
*/
export default class DisplayAnImage extends Component {
  render() {
    return (
      <Image
        style={{ width: 26, height: 26 }}
        source={require('./../images/home.png')}
      />
    );
  }
}
