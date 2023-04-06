import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = props => {
  const post = props.post;
  const navigation=useNavigation();
  
  const goToPostPage=()=>{
    navigation.navigate('Post',{postId:post.id});
  }
  const width = useWindowDimensions().width;

  return (
    <Pressable onPress={goToPostPage} style={[styles.container, {width: width - 60}]}>
      {/* Image */}
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: post.image}} />

        <View style={{marginHorizontal:10, flex:1}}>
          {/* Bed and Bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} bed - {post.bedroom} bedroom
          </Text>

          {/* Type and Description  */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type} - {post.title}
          </Text>

          {/* Old and New Price */}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
