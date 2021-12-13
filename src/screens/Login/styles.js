import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    LogoGoogle: {
        width: 16,
        height: 16,
        marginRight:210
    },
    tinyLogo: {
        width: 60,
        height: 50,
        marginBottom: 45,
        marginTop: 100,
    },
    LogoApple: {
        width: 18,
        height: 18,
        marginRight:210,
    },
    textLoginApple: {
        position: 'absolute',
        fontWeight: 'bold',
    },
    entrar: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 45,
    },
    safeArea: {
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        margin: 20,
        padding: 20,
        borderRadius:30,
    },
    textButtonEsqueceuSenha: {
        position: 'absolute',
        fontWeight: 'bold',

    },
    textButton: {
        color:'#fff',
        fontSize:14,
        position:'absolute',
    },
    buttonEsqueceuSenha: {
        backgroundColor: '#fff',
        borderColor: '#d6dbde',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        margin: 20,
        padding: 20,
        borderRadius:30,
        fontWeight: 'bold',
    },
    buttonLoginGoogle: {
        backgroundColor: '#fff',
        borderColor: '#d6dbde',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        margin: 20,
        padding: 20,
        borderRadius:30,
    },

    buttonLoginApple: {
        backgroundColor: '#fff',
        borderColor: '#d6dbde',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        margin: 20,
        padding: 20,
        borderRadius:30,
        fontWeight: 'bold',
    },
    textButtonLoginGoogle:{
        position:'absolute',
        fontWeight:'bold',
    },
    view:{
        flexDirection:'row',
    },
    viewText: {
        color: '#5cb7f4',
        textDecorationLine: "underline",
    }

});

export default styles;