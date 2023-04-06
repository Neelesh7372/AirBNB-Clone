import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

import places from '../../../assets/data/feed';

const CustomMarker = (props) => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
        <View style={{backgroundColor: isSelected?"black":"white",
                      padding:5,
                      borderRadius:20,
                      borderColor:'grey',
                      borderWidth:1}}>
            <Text style={{fontWeight:'bold',
                          color:isSelected?'white':'black'}}
                          >${price}
            </Text>
        </View>
    </Marker>
  )
}

export default CustomMarker;