import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import StyledText from './StyledText';

const AppBar = ({ children }: { children?: string }) => (
    <View>
        <Text>Repositorios</Text>
        <Link to="/signin">
            <Text>Visit your profile</Text>
        </Link>
        <StyledText>{children}</StyledText>
    </View>
);

AppBar.defaultProps = {
    children: '',
};
export default AppBar;
