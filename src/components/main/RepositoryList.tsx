import { View, Text, FlatList } from 'react-native';
import repositories from '../../../assets/repositories';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text />}
            renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
        />
    );
};

export default RepositoryList;
