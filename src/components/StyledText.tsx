import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: 'dimgrey',
    },
    bold: {
        fontWeight: 'bold',
    },
    blue: {
        color: 'blue',
    },
    big: {
        fontSize: 20,
    },
    small: {
        fontSize: 10,
    },
});

export default function StyledText({
    blue,
    children,
    bold,
    big,
    small,
}: {
    blue?: boolean;
    bold?: boolean;
    big?: boolean;
    children?: string | string[];
    small?: boolean;
}) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold,
    ] as TextStyle;

    return <Text style={textStyles}>{children}</Text>;
}
