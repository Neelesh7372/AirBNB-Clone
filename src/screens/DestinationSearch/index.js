import React, {useState} from "react";
import { View} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const HomeScreen = (props) =>{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guests');
                }}
                styles={{
                    textInput:styles.textInput,
                }}
                renderRow={(item)=><SuggestionRow item={item}/>}
                suppressDefaultStyles
                query={{
                    key: 'AIzaSyAw0J0IXLY18_NfuwplGGvFMDu_4godVCA',
                    language: 'en',
                    types:'(cities)'
                }}
                />
        </View>
    )
}

export default HomeScreen;