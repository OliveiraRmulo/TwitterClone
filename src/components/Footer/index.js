import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import styles from "./styles";

function Footer() {
    return(

        <KeyboardAvoidingView style={styles.keyboard}>

        <View style={styles.containerInicial}>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/Pginicial.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/busca.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/notif.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.inicial} source={require('../../image/dm.jpg')} />
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
    )
}

export default Footer;