
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import{ createUserWithEmailAndPassword} from   "firebase/auth";
import {auth} from "./config/firebase"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, IconButton } from 'react-native-paper';

const Signup = ({ navigation }) => {
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
  
    const onHandleSignup=()=>{
      if(email !==''&&password !==''){
       createUserWithEmailAndPassword(auth, email,password)
        .then(()=>navigation.navigate("profile"))
        .catch((err)=>Alert.alert("Signup error",err.message));
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
      <IconButton style={{ marginLeft: -300, marginTop: 40,top:42 }} icon={"arrow-left"} onPress={() => navigation.navigate('home')} />
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 0, fontSize: 25, fontWeight: '700' }}>  Sign Up Account  </Text>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '700' }}> Create New  Account! </Text>
     </View> 

      <View style={{
        backgroundColor: '#F9F1F0',
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>

           
<TextInput
          style={{ marginTop:100,borderWidth:1,height:50,borderRadius:5,paddingLeft:10,borderColor:'gray' }}
          mode="outlined"
          keyboardType='email-address'
          value={email}
          placeholder="Enter email"
          autoFocus={true}
          onChangeText={(text) => setEmail(text)}

        />
 <TextInput
          style={{ marginTop: 20,borderWidth:1,height:50,borderRadius:5,paddingLeft:10,borderColor:'gray' }}
          mode="outlined"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          placeholderTextColor={'gray'}
          placeholder="Enter password"
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
        />
       
        <Button 
        
        // disabled={email==""||password==""}
       style={{ marginTop: 20, backgroundColor: '#1BA9AD', borderColor: 'black', borderWidth: 1, paddingTop: 5, height: 50, borderRadius: 5 }}
         mode="contained"
         textColor='white'
         onPress={onHandleSignup}
         >
         Signup
       </Button>
      {/* //  )=>navigation.navigate("profile") */}
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{color: '#000000', fontWeight: '600', fontSize: 14}}>Log in</Text>
        </TouchableOpacity>
      </View>
          
     </View>
      </>
  )
}

export default Signup