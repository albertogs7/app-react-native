import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

const colors = {
    dimgray: 'dimgray',
    blue: 'blue',
};
const styles = StyleSheet.create({
    big: {
        fontSize: 20,
    },
    blue: {
        color: colors.blue,
    },
    bold: {
        fontWeight: 'bold',
    },
    small: {
        fontSize: 10,
    },
    text: {
        color: colors.dimgray,
        fontSize: 12,
    },
});

type Props = {
    blue?: boolean;
    bold?: boolean;
    big?: boolean;
    children: string | string[];
    small?: boolean;
};

export default function StyledText({
    blue,
    bold,
    big,
    children,
    small,
}: Props) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold,
    ] as TextStyle;
    return <Text style={textStyles}>{children}</Text>;
}

StyledText.defaultProps = {
    blue: false,
    bold: false,
    big: false,
    small: false,
};
