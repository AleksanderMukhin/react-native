import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Alert,
  Button,
} from "react-native";
import { gStyle } from '../styles/style';
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/Photo_BG.png")}
          style={{
            position: "absolute",
            resizeMode: "cover",
            width: "100%",
            height: "100%",
        }} />
      
      <View style={styles.regContainer}>        
      
        <Text style={styles.regText}>Увійти</Text>

        <View style={styles.regForm}>
          <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={styles.keyboardInp}
            >
            <TextInput placeholder="Адреса електронної пошти" style={styles.regInput} />

            <View >
              <TextInput placeholder="Пароль" style={styles.regInput} />
              <Text style={styles.inputPass}>Показати</Text>
            </View>
          </KeyboardAvoidingView>
          </View> 
          {/* <Button title="Зареєстуватися" style={styles.regBtn} /> */}
          
            
         <TouchableOpacity style={styles.regBtn}>
            <Text style={styles.regBtnText}>Увійти</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.txtBtnAuth}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>  
      </View>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'flex-end',
    
  },
  regContainer: {
    height: "68%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  regText: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "roboto_med",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    letterSpacing: 0.3,
  },
  regInput: {
    backgroundColor: '#F6F6F6',
    width: 343,
    height: 50,
    marginBottom: "5%",
    borderWidth: 0.5,
    borderColor: "#E8E8E8",
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 5,
    color: '#BDBDBD',
  },
  inputPass: {
    position: "absolute",
    left: 255,
    top: 14,
    fontFamily: "roboto_reg",
    fontSize: 16,
    color: "#1B4371",
  },
  regBtn: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: 343,
    marginTop: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  regBtnText: {
    fontFamily: 'roboto_reg',
    fontSize: 16,
    color: '#FFFFFF',
  },
  txtBtnAuth: {
    marginTop: 16,
    fontFamily: "roboto_reg",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  }
});