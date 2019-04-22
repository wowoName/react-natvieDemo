/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {

    }
    render() {
        return ( <
            ScrollView >


            <
            /ScrollView>
        );
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
    },
    modal: {
        height: "60%",
        backgroundColor: "blue"
    }
});