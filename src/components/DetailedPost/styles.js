import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image:{
        width:'100%',
        aspectRatio: 3/2,
        resizeMode:'cover',
        borderRadius:10,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b',
    },
    description:{
        fontSize: 20,
        lineHeight:22,
        color:'black',
    },
    prices:{
        fontSize: 20,
        marginVertical:5,
        color:'black'
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    },
    newPrice:{
        fontWeight:'bold',
        color:'black',
    },
    totalPrice:{
        color:'#5b5b5b',
        fontSize:16,
        textDecorationLine:'underline',
    },
    postDescription:{
        marginVertical:20,
        fontSize:16,
        lineHeight:20,
    }
});

export default styles;