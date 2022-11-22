/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/sort-styles */
import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    large: {
        fontSize: theme.fontSizes.large,
    },
    small: {
        fontSize: theme.fontSizes.small,
    },
    secondary: {
        color: theme.colors.secondary,
    },
    succsess: {
        color: theme.colors.success,
    },
    info: {
        color: theme.colors.info,
    },
    warning: {
        color: theme.colors.warning,
    },
    danger: {
        color: theme.colors.warning,
    },
    light: {
        color: theme.colors.light,
    },
    dark: {
        color: theme.colors.dark,
    },
    'text-center': {
        textAlign: 'center',
    },
    'text-right': {
        textAlign: 'right',
    },
    'text-justify': {
        textAlign: 'justify',
    },
    text: {
        color: theme.colors.normal,
        fontSize: theme.fontSizes.normal,
    },
});

type Props = {
    children?: any | any[];
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    align?: string;
    style?: any;
};

export default function StyledText({ align, children, color, fontSize, fontWeight, style }: Props) {
    // prettier-ignore
    const textStyles = [
        styles.text,         
        color ==='secondary' && styles.secondary,
        color ==='success' && styles.succsess,
        color ==='info' && styles.info,
        color ==='warning' && styles.warning,
        color ==='danger' && styles.danger,
        color === 'light' && styles.light,
        color === 'dark' && styles.dark,
        fontSize === 'small' && styles.small,
        fontSize === 'large' && styles.large,
        fontWeight === 'bold' && styles.bold,
        align ==='center' && styles['text-center'],
        align ==='right' && styles['text-right'],
        align ==='justifiy' && styles['text-justify'],
        style

    ] as TextStyle;
    return <Text style={textStyles}>{children}</Text>;
}

StyledText.defaultProps = {
    children: '',
    color: theme.colors.primary,
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontWeights.normal,
    align: 'left',
    style: null,
};
