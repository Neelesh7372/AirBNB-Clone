import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const Post = (props) => {

  const post = props.post;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{ uri: post.image}}
      />

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
        <Text style={styles.newPrice}> ${post.newPrice}</Text>
        {" "}/ night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

      {/* Post Description */}
      <Text style={styles.postDescription}>
        {post.description}
      </Text>
    </View>
    </ScrollView>
  );
};

export default Post;
