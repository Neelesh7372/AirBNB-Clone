import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
   
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center',
    },
    title:{
        fontSize:80,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:20,
    },
    button:{
        backgroundColor:'#fff',
        width: 175,
        height:40,
        borderRadius:10,
        marginLeft:20,
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        color:'black',
        fontWeight:'bold',
    },
    searchButton:{
        backgroundColor:'#fff',
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:40,
        height:60,
        width:Dimensions.get('screen').width - 20,
        marginHorizontal:10,
        borderRadius:30,
        elevation:100,
        zIndex:100                   //ios
    },
    searchButtonText:{
        fontSize:16,
        color:'black',
        marginLeft:10,
        fontWeight:'bold',
    },
});

export default styles;