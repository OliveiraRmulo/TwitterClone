import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    tinyLogo: {
        width: 60,
        height: 50,
        marginBottom: 45,
        marginTop: 100
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
    textButton: {
        color:'#fff',
        fontSize:14,


    }

});

export default styles;