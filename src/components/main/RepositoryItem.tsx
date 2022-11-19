import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledText from '../StyledText';

interface IRepositoryItem {
    id: string;
    language?: string;
    fullName?: string;
    description?: string;
    stargazersCount?: number;
    forksCount?: number;
    reviewCount?: number;
    raitingAverage?: number;
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
});

const RepositoryItem = ({
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    raitingAverage,
}: IRepositoryItem) => (
    <View key={id} style={styles.container}>
        <StyledText bold blue>
            id:{id}
        </StyledText>
        <Text>FullName: {fullName}</Text>
        <Text>Description: {description}</Text>
        <Text>Language: {language}</Text>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Review: {reviewCount}</Text>
        <Text>Raiting: {raitingAverage}</Text>
    </View>
);

RepositoryItem.defaultProps = {
    language: null,
    fullName: null,
    description: null,
    stargazersCount: 0,
    forksCount: 0,
    reviewCount: 0,
    raitingAverage: 0,
};

export default RepositoryItem;
