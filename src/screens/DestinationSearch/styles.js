import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
   container:{
    padding:20,
    height:'100%',
    backgroundColor:'white'
   },
   textInput:{
    fontSize:20,
   },
   row:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:10,
    borderBottomWidth: 2,
    borderColor:'lightgrey'
   },
   iconContainer:{
    backgroundColor:'#e7e7e7',
    padding:7,
    borderRadius:5,
    marginRight:15,
   },
   locationText:{
    color:'black'
   }
});

export default styles;