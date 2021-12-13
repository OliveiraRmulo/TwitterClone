import React from "react";
import { Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import styles from "./styles";

function Footer() {
    return (

        <View style={styles.keyboard}>

            <View style={styles.containerInicial}>
                <TouchableOpacity >
                    <Image style={styles.inicial} source={require('../../image/PgInicialAtualizado.png')} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image style={styles.inicial} source={require('../../image/buscaAtualizado.png')} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image style={styles.inicial} source={require('../../image/notifAtualizado.png')}
                        onPress={() => navigation.navigate("Notificacoes")} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image style={styles.inicial} source={require('../../image/mensagemAtualizado.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Footer;