import React from "react";
import { SafeAreaView, TextInput, Text, Image, TouchableOpacity, View} from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


function Login() {
  const [text, onChangeText] = React.useState(null);
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.safeArea}>

      <Image style={styles.tinyLogo} source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png' }} />
      <Text style={styles.entrar}>Entrar no Twitter</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonLoginGoogle}>
        <Image style={styles.LogoGoogle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png' }} />
        <Text style={styles.textButtonLoginGoogle}> Fazer o login com o Google </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonLoginApple}>
        <Image style={styles.LogoApple} source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/icone-apple-symbole-logo-noir.png' }} />
        <Text style={styles.textLoginApple}> Entrar com Apple</Text>
      </TouchableOpacity>
      <Text>--------------------- OU ---------------------</Text>

      <TextInput style={styles.input} onChangeText={onChangeText} value={text}
        placeholder="Celular, E-mail ou Nome de Usuario" />

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.textButton}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonEsqueceuSenha}>
        <Text style={styles.textButtonEsqueceuSenha}>Esqueceu sua Senha?</Text>
      </TouchableOpacity>

      <View style={styles.view}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.viewText}> Inscreva-se </Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};



export default Login;