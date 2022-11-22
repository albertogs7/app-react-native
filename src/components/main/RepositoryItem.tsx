import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../../theme';
import StyledText from '../StyledText';
import { format } from '../../utils';

interface IRepositoryItem {
    id: string;
    language: string;
    fullName: string;
    description: string;
    stargazersCount: number;
    forksCount: number;
    reviewCount: number;
    raitingAverage: number;
    ownerAvatarUrl: string;
}

const styles = StyleSheet.create({
    avatar: {
        height: 40,
        marginEnd: 10,
        width: 40,
    },
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    header: {
        flexDirection: 'row',
    },
    language: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        color: theme.colors.white,
        marginBottom: 2,
        marginTop: 2,
        overflow: 'hidden',
        padding: 2,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const RepositoryStats = (props: any) => (
    <View style={styles.stats}>
        <View>
            <StyledText fontSize="small" align="center">
                {format(props.stargazersCount)}
            </StyledText>
            <StyledText fontSize="small" fontWeight="bold">
                Stars
            </StyledText>
        </View>
        <View>
            <StyledText fontSize="small" align="center">
                {format(props.forksCount)}
            </StyledText>
            <StyledText fontSize="small" fontWeight="bold">
                Forks
            </StyledText>
        </View>
        <View>
            <StyledText fontSize="small" align="center">
                {format(props.reviewCount)}
            </StyledText>
            <StyledText fontSize="small" fontWeight="bold">
                Review
            </StyledText>
        </View>
        <View>
            <StyledText fontSize="small" align="center">
                {props.raitingAverage}
            </StyledText>
            <StyledText fontSize="small" fontWeight="bold">
                Raiting
            </StyledText>
        </View>
    </View>
);

const RepositoryHeader = ({ ownerAvatarUrl, id, fullName }: { ownerAvatarUrl: string; id: string; fullName: string }) => (
    <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View>
            <StyledText fontWeight="bold" fontSize="large" color="primary">
                id:{id}
            </StyledText>
            <StyledText fontSize="large">FullName: {fullName}</StyledText>
        </View>
    </View>
);

const RepositoryItem = ({ id, fullName, description, language, stargazersCount, forksCount, reviewCount, raitingAverage, ownerAvatarUrl }: IRepositoryItem) => (
    <View key={id} style={styles.container}>
        <RepositoryHeader {...{ id, fullName, ownerAvatarUrl }} />
        <StyledText>Description: {description}</StyledText>
        <StyledText fontSize="small" style={styles.language}>
            {language}
        </StyledText>
        <RepositoryStats {...{ stargazersCount, forksCount, reviewCount, raitingAverage }} />
    </View>
);

RepositoryItem.defaultProps = {};

export default RepositoryItem;
