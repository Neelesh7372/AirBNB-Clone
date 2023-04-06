import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        height:'100%',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor:'lightgrey',
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        borderWidth:1,
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#676767'

    },
    btn:{
        fontSize:18,
        color:'#474747'
    },
    number:{
        marginHorizontal:20,
        fontSize:18,
        color:'black'
    },
    search:{
        marginBottom:20,
        backgroundColor:'#f15454',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        marginHorizontal:20,
        borderRadius:10,
    },
    searchText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
});

export default styles;