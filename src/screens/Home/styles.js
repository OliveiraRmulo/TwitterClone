import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
    },
    containerHeader: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'#e0e4e9',   
        paddingVertical:6,
        paddingHorizontal:10,
        backgroundColor:'#fff'
    },
    logo:{
        width: 38,
        height: 30,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius:'1rem',
    },
    icon: {
        width: 40,
        height: 40,
    },
    fotoUsuario: {
        margin:15,
        marginTop:15,
        width: 70,
        height: 70,
    },
    nomeUsuario: {
        margin:105,
        marginTop:-80,
        fontSize:20,
        fontWeight: 'bold'
    },
    arrobaUsuario: {
        flex:1,
        margin:-97,
        marginTop:-80,
        fontSize:20,
        color: '#8e99a1'
    },
    view: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text: {
        flex:1,
        margin:23,
        marginTop:-100,
        marginLeft:105,
        fontSize:18,
    },
    reactions:{
        flexDirection:'row',
    },
    reacoes: {
        width: 25,
        height: 25,
        marginLeft:60,
        
    },
  
});

export default styles;