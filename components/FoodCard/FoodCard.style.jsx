import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:2,
flexDirection:"row",
borderColor:"#b0bec5",
borderWidth:1,
flex:1,
overflow:"hidden",
backgroundColor:"#e0e0e0",
    },
    image:{
        width:200,
        height:150,
    },
    bodyContainer:{
flex:1,
padding:5,
justifyContent:"center"
    },
    title:{
        fontSize:20,
        marginLeft:10,
        fontWeight:"bold",
        textTransform:"uppercase"
    }
})

export default  styles