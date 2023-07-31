import {
  Alert,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputActive, setIsInputActive] = useState([]);
  const navigation = useNavigation();
  
  function handleFocus(id) {
    setIsInputActive((previous) => {
      const current = [...previous];
      current[id] = true;
      return current;
    });
  };
    
  function handleBlur(id) {
    setIsInputActive((previous) => {
      const current = [...previous];
      current[id] = false;
      return current;
    });
  };

  function onRegister() {
    // if (userName.length === 0 || email.length === 0 || password.length === 0) {
    //   Alert.alert("Не всі поля заповнені");
    //   return;
    // }
    // Alert.alert("Credentials", `${userName} + ${email} + ${password}`);
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={require("../Images/background.jpg")}>
          <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
            <View style={styles.form}>
              <View style={styles.photo}>
                  <Image source={require("../Images/add.png")} style={styles.add} />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={[styles.input, isInputActive[0] && styles.inputOnFocus]}
                placeholder="Логін"
                value={userName}
                onChangeText={setUserName}
                onFocus={() => handleFocus(0)}
                onBlur={() => handleBlur(0)}
              />
              <TextInput
                style={[styles.input, isInputActive[1] && styles.inputOnFocus]}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                onFocus={() => handleFocus(1)}
                onBlur={() => handleBlur(1)}
              />
              <View style={styles.input_container}>
                <TextInput
                  style={[styles.input, isInputActive[2] && styles.inputOnFocus]}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus(2)}
                  onBlur={() => handleBlur(2)}
                />
                <Text style={styles.password}>Показати</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={onRegister}>
              <Text style={styles.button_text}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  form: {
    backgroundColor:"#FFFFFF",
    fontFamily: "Roboto",
    justifySelf: "flex-start",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 16,
    paddingBottom: 32,
    marginTop: 32,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
  },
  photo: {
    justifySelf: "center",
    alignSelf: "center",
    borderRadius:25,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    marginTop: -50,
  },
  add: {
    position: "absolute",
    bottom: 14,
    left: 107,
  },  
  title: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginVertical : 16,
  },
  input: {
    fontFamily: "Roboto",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    width: '100%',
    padding: 16,
  },
  inputOnFocus: {
    borderColor: "#FF6C00"
  },
  input_container: {
    position: "relative",
    width: "100%",
  },  
  password: {
    position: 'absolute',
    right: 16,
    top: 20,
    zIndex: 1,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    color: "#1B4371"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 11,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    width: "90%",
    borderRadius:100,
  },
  button_text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  text:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    color: "#1B4371",
  },
  footer: {
    backgroundColor:"#fff",
    fontFamily: 'Roboto',
    justifySelf: "flex-start",
    alignItems: "center",
    gap: 16,
    paddingBottom: 70,
  }
})