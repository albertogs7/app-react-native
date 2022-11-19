import { View, Text, StyleSheet } from 'react-native';
import StyledText from '../StyledText';

const RepositoryItem = (props: any) => (
    <View key={props.id} style={styles.container}>
        <StyledText bold blue>
            id: {props.id}
        </StyledText>
        <Text>FullName: {props.fullName}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Stars: {props.stargazersCount}</Text>
        <Text>Forks: {props.forksCount}</Text>
        <Text>Review: {props.reviewCount}</Text>
        <Text>Raiting: {props.ratingAverage}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    id: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default RepositoryItem;
