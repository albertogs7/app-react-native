import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Routes, Route } from 'react-router-native';
import Constants from 'expo-constants';
import RepositoryList from '../components/main/RepositoryList';
import AppBar from '../components/AppBar';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: Constants.statusBarHeight,
        width: '100%',
    },
});

const Main = () => (
    <View style={styles.container}>
        <AppBar>Repositorios</AppBar>
        <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route
                path="/signin"
                element={
                    <View>
                        <Text>Working on It</Text>
                    </View>
                }
            />
        </Routes>
    </View>
);

export default Main;
