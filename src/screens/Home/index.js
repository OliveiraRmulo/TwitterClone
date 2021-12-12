import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, ScrollView, Text } from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';


function Home() {

    return (
        <>
            {/* Header */}
            <View style={styles.containerHeader}>
                <View>
                    <TouchableOpacity >
                        <Image style={styles.avatar} source={require('../../image/augustinho.jpg')} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Image style={styles.logo} source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png' }} />

                </View>
                <View>
                    <TouchableOpacity >
                        <Image style={styles.icon} source={require('../../image/ESTRELINHA.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Feed */}

            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.container}>
                <Image style={styles.fotoUsuario} source={require('../../image/romulo.png')} />
                <View style={styles.view}>
                    <Text style={styles.nomeUsuario}>Romulo</Text>
                    <Text style={styles.arrobaUsuario}>@Romulo  • 4h</Text>
                </View>
                <Text style={styles.text}>Hoje eu acordei com vontade de matar o @Kelvin</Text>

                <View style={styles.reactions}>
                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/comentario2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/retwittar2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/curtir2.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={styles.reacoes} source={require('../../image/compartilhar2.png')} />
                    </TouchableOpacity>

                </View>

            </View>


            {/* Footer */}
            {/* <View style={{height:'84%', width:'100%'}}>
           <ScrollView style={{height:'100%' , width:'100%'}}>
               <Text>Oi</Text>
           </ScrollView>
         </View> */}

            <Footer />
        </>
    )
}
export default Home;
