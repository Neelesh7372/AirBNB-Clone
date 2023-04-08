import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet, Dimensions } from "react-native";

import { Auth } from 'aws-amplify';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
     height:'100%',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
    },
    button:{
        height:'100%',
        width:'100%',
        height:40,
        backgroundColor:'#c3c3c3',
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
     fontSize:20,
    },
 });

export default ProfileScreen;