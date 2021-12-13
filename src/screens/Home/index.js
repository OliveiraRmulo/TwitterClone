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
                        <Image style={styles.avatar} source={require('../../image/carrara.png')} />
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
            <View style={{flex:1}}>
            <ScrollView>
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

                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/julio.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Julio</Text>
                            <Text style={styles.arrobaUsuario}>@Julio  • 30m</Text>
                        </View>
                        <Text style={styles.text}>Tô mais perdido que o @Kelvin no supermercado comprando shampoo</Text>

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
                    <View>
                        <Image style={styles.fotoUsuario} source={require('../../image/jean.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Jean</Text>
                            <Text style={styles.arrobaUsuario}>@Jean  • 1h</Text>
                        </View>
                        <Text style={styles.text}>Será que um dia eu vou namorar?</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/rafael.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Rafael</Text>
                            <Text style={styles.arrobaUsuario}>@Rafael  • 2h</Text>
                        </View>
                        <Text style={styles.text}>Ta se fazendo de pão?</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/kelvin.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Kelvin</Text>
                            <Text style={styles.arrobaUsuario}>@Kelvin  • 10m</Text>
                        </View>
                        <Text style={styles.text}>Não vamos conseguir fazer esse trabalho</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/yuri.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Yuri</Text>
                            <Text style={styles.arrobaUsuario}>@Yuri  • 10h</Text>
                        </View>
                        <Text style={styles.text}>Galera, partiu Yoga no Parque de Itaipava domingo?</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/yuri.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Yuri</Text>
                            <Text style={styles.arrobaUsuario}>@Yuri  • 5h</Text>
                        </View>
                        <Text style={styles.text}>Poxa galera fiquei esperando, ninguém apareceu (T.T)</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/calmon.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Calmon</Text>
                            <Text style={styles.arrobaUsuario}>@Calmon  • 4h</Text>
                        </View>
                        <Text style={styles.text}>Bora Codaaaarrrrr!!!</Text>

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

                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/bernardo.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Bernardo</Text>
                            <Text style={styles.arrobaUsuario}>@Bernardo  • 1m</Text>
                        </View>
                        <Text style={styles.text}>Vou te lambretar meu irmão! @Julio</Text>

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
                    <View >
                        <Image style={styles.fotoUsuario} source={require('../../image/igor.png')} />
                        <View style={styles.view}>
                            <Text style={styles.nomeUsuario}>Igor</Text>
                            <Text style={styles.arrobaUsuario}>@SeuBarriga  • 18h</Text>
                        </View>
                        <Text style={styles.text}>Você sabia que somente os idiotas respondem uma pergunta com outra pergunta?</Text>

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
                </View>

            </ScrollView>
            </View>
            {/* Footer */}
            <Footer />
        </>
    )
}
export default Home;
