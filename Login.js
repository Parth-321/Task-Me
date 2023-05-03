import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton, Button } from 'react-native-paper';
import PhoneinputView from 'react-native-phone-input'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ph, setPh] = useState("");
  // const[otp,setOtp]=useState("");
  // const[showOTP, setShowOTP]=useState(true);
  // const[user,setUser]=useState(null);

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("received"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <>
      <View style={{
        padding: 35,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        padding: 0,

        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>
        <IconButton style={{ marginLeft: -300, marginTop: 40, top: 42 }} icon={"arrow-left"} onPress={() => navigation.navigate('login')} />
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 0, fontSize: 25, fontWeight: '700' }}>  Login Account  </Text>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '700' }}> Hello, Welcome Back to Account! </Text>
      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
           {/* <PhoneinputView style={{borderRadius:5,borderWidth:1,height:50}}
            placeholder={'enter your number'} initialCountry='in' value={ph} onChange={setPh}/> */}
        
        <TextInput
          style={{ marginTop: 100, borderWidth: 1, height: 50, borderRadius: 5, paddingLeft: 10, borderColor: 'gray' }}
          mode="outlined"
          keyboardType='email-address'
          value={email}
          placeholder="Enter email"
          autoCapitalize="none"
          autoFocus={true}
          onChangeText={(text) => setEmail(text)}

        />
        <TextInput
          style={{ marginTop: 20, borderWidth: 1, height: 50, borderRadius: 5, paddingLeft: 10, borderColor: 'gray' }}
          mode="outlined"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          placeholderTextColor={'gray'}
          placeholder="Enter password"
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
        />
        {/* <TouchableOpacity style={{  backgroundColor: '#000000',height: 58,
    borderRadius: 10, justifyContent: 'center',  alignItems: 'center',marginTop: 40,}} 
    onPress={(onHandleLogin)=> navigation.navigate("received")}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 18}}> Log In</Text>
      </TouchableOpacity> */}
        <Button

          //  disabled={email==""||password==""}
          style={{ marginTop: 20, backgroundColor: '#1BA9AD', borderColor: 'black', borderWidth: 1, paddingTop: 5, height: 50, borderRadius: 5 }}
          mode="contained"
          textColor='white'
          onPress={onHandleLogin}

        >
          Login
        </Button>

        {/* () => navigation.navigate('received') */}


        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ color: '#000000', fontWeight: '600', fontSize: 14 }}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default Login