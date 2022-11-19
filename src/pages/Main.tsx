import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from '../components/main/RepositoryList';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: Constants.statusBarHeight,
    },
});

const Main = () => (
    <View style={styles.container}>
        <RepositoryList />
    </View>
);

export default Main;
