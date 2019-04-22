/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "一些信息"
    };
  }

  intToLetter(value) {
    let k = --value % 26, //26代表A~Z 26个英文字母个数.
      str = "";
    while (Math.floor((value = value / 26)) != 0) {
      str = String.fromCharCode(k + 65) + str; //65 代表'A'的ASCII值.
      k = --value % 26;
    }
    //String.fromCharCode(num):求出num数值对应的字母.num应该为ASCII中的值.
    str = String.fromCharCode(k + 65) + str;
    return str;
  }
  render() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <ScrollView style={styles.main} onMomentumScrollEnd={(e) => {
        this.isBottom(e)
      }} onTouchMove={e => {
        this.hasMove(e)
      }} onTouchEnd={e => {
        this.hadMoveend(e)
      }}>
        {data.map(v => {
          return <Text key={v} style={styles.containerStyle} onPress={e => {
            Actions.index({
              data: '从home返回index',
              show: true
            })
          }}>{this.intToLetter(v)}{this.state.msg} </Text>;
        })}
      </ScrollView>
    );
  }
  hasMove() {

  }
  hadMoveend() {

  }
  //监听是否滑动到底了
  isBottom(e) {
    let offsetY = e.nativeEvent.contentOffset.y, //滑动距离
      contentSizeHeight = e.nativeEvent.contentSize.height, //scrollView contentSize高度
      oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
    if (offsetY + oriageScrollHeight >= contentSizeHeight) {
      this.setState({
        msg: "到底了"
      });
    } else {
      this.setState({
        msg: "未到底"
      })
    }
  }
  textClick(e, info) {
    this.setState({
      msg: info
    })
  }
};
export default App;

var styles = StyleSheet.create({
  main: {
    overflow: "scroll"
  },
  containerStyle: {
    width: "100%",
    height: 120,
    marginBottom: 20,
    backgroundColor: "#1E90FF",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 120
  }
});
