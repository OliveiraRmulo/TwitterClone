import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import styles from "./styles";

function Footer() {
    return(

        <KeyboardAvoidingView style={styles.keyboard}>

        <View style={styles.containerInicial}>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/home2.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/pesquisa.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/noti.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/mensa.png')} />
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
    )
}

export default Footer;