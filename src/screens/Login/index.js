import React from "react";
import { SafeAreaView, TextInput, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


function Login() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.safeArea}>

      <Image style={styles.tinyLogo} source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png' }} />
      <Text style={styles.entrar}>Entrar no Twitter</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text}
        placeholder="Celular, E-mail ou Nome de Usuario" />

      <TextInput style={styles.input} onChangeText={onChangeNumber} value={number}
        placeholder="Digite sua Senha" secureTextEntry={true} />

      <TouchableOpacity onPress={ () => navigation.navigate('Home') } style={styles.button}>
        <Text style={styles.textButton}>Logar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};



export default Login;