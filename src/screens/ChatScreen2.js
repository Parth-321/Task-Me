import { View, Text,ImageBackground,FlatList,style, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import bg from  '../../assets/BG.png'
import Message from '../Message';
import message from '../../assets/messages.json'
import InputBox from '../inputbox';
import chats from '../../assets/chats.json'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ChatScreen = () => {
  const route=useRoute();
const navigation=useNavigation();

  return (
    // <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}
    // style={{flex:1}} >
   <ImageBackground source={bg} style={{flex:1}}>
    <FlatList
    data={message}
    renderItem={({item})=> <Message message={item}/>}
    style={{padding:10}} 
    inverted/>
    <InputBox/>     
   </ImageBackground>
//    </KeyboardAvoidingView>
  );
};


export default ChatScreen