import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import theme from '../theme';
import StyledText from './StyledText';

const styles = StyleSheet.create({
    active: {
        color: theme.colors.white,
    },
    appBar: {
        backgroundColor: theme.colors.dark,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    appTab: {
        color: theme.colors.silver,
        paddingEnd: 5,
    },
    scroll: {
        padding: 10,
    },
});

const AppBarTab = ({ children, to, style }: { children?: string; to: string; style?: any }) => {
    const { pathname } = useLocation();

    const styleTab = [style, pathname === to ? styles.active : null];
    return (
        <Link to={to} style={styleTab}>
            <StyledText style={styleTab}>{children}</StyledText>
        </Link>
    );
};

const AppBar = () => (
    <View style={styles.appBar}>
        <ScrollView horizontal style={styles.scroll}>
            <AppBarTab style={styles.appTab} to="/">
                Repositories
            </AppBarTab>
            <AppBarTab to="/signin" style={styles.appTab}>
                Sign In
            </AppBarTab>
            <AppBarTab to="/signin0" style={styles.appTab}>
                Sub to Twitch account
            </AppBarTab>
            <AppBarTab to="/signin1" style={styles.appTab}>
                Sign In
            </AppBarTab>
            <AppBarTab to="/signin2" style={styles.appTab}>
                Sign In
            </AppBarTab>
            <AppBarTab to="/signin3" style={styles.appTab}>
                Sign In
            </AppBarTab>
            <AppBarTab to="/signin4" style={styles.appTab}>
                Sign In
            </AppBarTab>
            <AppBarTab to="/signin5" style={styles.appTab}>
                Sign In
            </AppBarTab>
        </ScrollView>
    </View>
);

AppBar.defaultProps = {
    children: '',
};

AppBarTab.defaultProps = {
    children: '',
    style: null,
};
export default AppBar;
