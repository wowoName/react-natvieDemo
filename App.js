import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Index from './components/Index';
import Home from './components/Home';
import MyCenter from './components/MyCenter';
import MyTab from './components/TabImg';
import TabTemplate from './components/TabTemplate';
let msg = "我的";
const tabIndex = 0,
  App = () => (
    <Router >
      {/* <Scene key="root" tabs activeBackgroundColor="#20B2AA" activeTintColor="#ffffff" tabBarPosition="bottom">
      <Tabs
        key="index"//唯一标识
        component={Index}
        initial={true}//默认显示页面
        title="首页"//导航栏标题
        hideNavBar={true}//是否隐藏顶部的tab
      />
      <Scene key="home" hideNavBar={true} title="购物车" tabs={true} backButtonImage="../images/bill.png" component={Home} />
      <Scene key="meCenter" hideNavBar={true} title="个人中心" component={MyCenter} />
    </Scene> */}

      {/* tab添加图片 使用pro icon 引入一个组件 */}
      <Tabs key="root">
        <Tabs key="home" inactiveTintColor="#ececec" icon={MyTab} hideNavBar={true} title="我的" component={Home} />
        <Scene key="meCenter" hideNavBar={true} title="个人中心" component={MyCenter} />
      </Tabs>

      {/* 自定义标签栏 */}
      {/* <Tabs key="root">
        <Tabs key="home" tabBarComponent={TabTemplate} />
      </Tabs> */}
    </Router>
  );
const styles = StyleSheet.create({
  main: {
    overflow: "scroll"
  },
  containerStyle: {
    backgroundColor: "#20B2AA",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  back: {
    color: "#20B2AA"
  }
});

export default App;