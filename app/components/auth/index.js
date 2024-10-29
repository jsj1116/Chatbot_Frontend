/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component, useEffect } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import AuthLogo from './authLogo';
import AuthForm from './authForm';
import { getTokens } from '../../utils/misc';

const AuthComponent = ({navigation}) => {

    const [loading, setLoading] = React.useState(false)

    goWithoutLogin = () => {
        navigation.navigate("AppTabComponent")
    }

    // componentDidMount = () => {
    //     getTokens();
    // }

    useEffect(() => {
        getTokens();
      }, []);
    
    if(loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <AuthForm
                    goWithoutLogin={goWithoutLogin}
                />
            </View>
        )
    }
    
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default AuthComponent;
