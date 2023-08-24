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

export default function RegistrationScreen() {
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
        <View style={styles.avatar}>          
          <Image source={require("../assets/images/add-photo.png")} />            
          
          <View style={styles.iconAdd}>
            {/* <AntDesign name="pluscircleo" size={24} color="#FF6C00" /> */}
            <Image source={require("../assets/images/add.png")} />
          </View>
        </View>        
      
        <Text style={styles.regText}>Реєстрація</Text>
          
        <View style={styles.regForm}>
          <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
            <TextInput placeholder="Логін" style={styles.regInput} autoFocus={true} />

            <TextInput placeholder="Адреса електронної пошти" style={styles.regInput} />

            <View >
              <TextInput placeholder="Пароль" style={styles.regInput} />
              <Text style={styles.inputPass}>Показати</Text>
            </View>
          </KeyboardAvoidingView>
        </View>

          {/* <Button title="Зареєстуватися" style={styles.regBtn} /> */}
           <TouchableOpacity style={styles.regBtn}>
            <Text style={styles.regBtnText}>Зареєстуватися</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.txtBtnAuth}>Вже є акаунт? Увійти</Text>
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
    // position: "relative",
    // top: 200,
    height: "68%",
    // width: "auto",
    // paddingRight: 16,
    // paddingBottom: 45,
    // paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // textAlign: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    top: -55,
    width: 120,
    height: 120,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  regText: {
    top: -33,
    fontFamily: "roboto_med",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    letterSpacing: 0.3,
  },
  iconAdd: {
    position: "absolute",
    top: 83,
    left: 107,
    width: 30,
    height: 30,
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
  regForm: {
    top: -10,
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
    marginTop: 33,
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