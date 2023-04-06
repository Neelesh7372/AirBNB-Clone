import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:130,
        padding:5,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 24
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'white',
        overflow:'hidden'
    },
    image:{
        aspectRatio: 1,
        resizeMode:'cover',
        borderRadius:10,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b',
    },
    description:{
        fontSize: 20,
        color:'black',
    },
    prices:{
        fontSize: 15,
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
    }
});

export default styles;