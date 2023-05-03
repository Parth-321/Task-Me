import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react'

const InputBox = () => {
    const[newMessage, setNewMessage] =useState('hello');
    const onSend=()=>{
        console.warn('sending new message',newMessage);
        setNewMessage('');
    };
  return (
    <View style={styles.container}>
      <AntDesign  name='plus' size={20} color={'royalblue'} />
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='type your message' />
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color={'white'} />
    </View>
  )
};
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        paddingHorizontal:10,
        alignItems:'center',

    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding:5,
        borderRadius:50,
        paddingHorizontal:10,
        borderColor:'lightgray',
        borderWidth:StyleSheet.hairlineWidth,
        marginHorizontal:10,
    },
    send:{
      backgroundColor:'royalblue',
      padding:7,
      borderRadius:15,
      overflow:'hidden',
    },

})

export default InputBox