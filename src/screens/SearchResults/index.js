import React from "react";
import {View,FlatList} from 'react-native';
import Post from "../../components/Post";

const SearchResultsScreen = (props) =>{
    const {posts}=props;  
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({item}) => <Post post={item} />}/>
        </View>
    );
};

export default SearchResultsScreen;