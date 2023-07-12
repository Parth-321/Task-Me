import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react'
import { Menu,MenuItem,MenuDivider } from 'react-native-material-menu'

const InputBox = () => {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
    const[newMessage, setNewMessage] =useState('hello');
    const onSend=()=>{
        console.warn('sending new message',newMessage);
        setNewMessage('');
    };
  return (
    <View style={styles.container}>
      <Menu
      visible={visible}
      anchor={ <AntDesign  name='plus' size={24} color={'#FFFFFF'} onPress={showMenu} />}
      onRequestClose={hideMenu}>
        <MenuItem onPress={hideMenu}>Check list </MenuItem>
        <MenuItem onPress={hideMenu}>Meeting </MenuItem>
        <MenuItem onPress={hideMenu}>Reminder </MenuItem>
        <MenuItem onPress={hideMenu}>Camera  </MenuItem>
        <MenuItem onPress={hideMenu}>Photo Gallery  </MenuItem>
        <MenuItem onPress={hideMenu}>Files </MenuItem>
       
      </Menu>
     
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='type your message' />
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color={'white'} />
    </View>
  )
};
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#1BA9AD',
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
      backgroundColor:'#01D6C9',
      padding:7,
      borderRadius:15,
      overflow:'hidden',
    },

})

export default InputBox