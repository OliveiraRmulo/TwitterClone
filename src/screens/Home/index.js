import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';


function Home() {

    return (
        <>
            {/* Header */}
            <View styled={styles.containerHeder}>
                <TouchableOpacity >
                    <Image style={{ width:30 , height:50 }} source={require('../../image/ESTRELINHA.png')} />
                </TouchableOpacity>
            </View>

            {/* Footer */}

           <Footer />

        </>
    )
}
export default Home;
