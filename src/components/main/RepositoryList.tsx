import React from 'react';
import { Text, FlatList } from 'react-native';
import repositories from '../../../assets/repositories';
import RepositoryItem from './RepositoryItem';

const ItemSeparatorComponent = () => <Text />;

const RepositoryList = () => (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
);

export default RepositoryList;
