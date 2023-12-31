import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState, useRef } from "react-native";

import { getAuth, signOut } from 'firebase/auth';
import { auth } from "./config/firebase"
import  { TextInput, Button, IconButton,Provider} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { useEffect } from 'react';
import ChatListItem from './src/navigation/component/ChatListItem';
import ChatScreen from './src/screens/ChatScreen2';
import ChatsScreen from './src/screens/ChatsScreen';
import { Pressable } from 'react-native';
import SearchModal from './src/navigation/component/SearchModal';
import { ListItem,Avatar } from 'react-native-elements';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

const Received = ({ navigation,chats }) => {
  const [visible, setVisible] = React.useState(false);
  // const[activeSearch, setActiveSearch]= useState(false);
  // const[searchQuery, setSearchQuery]= useState("");
  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);
 
  const users=[]

  const closeMenu = () => setVisible(false);
  const onHandleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("login");
      }).catch((error) => {
        // An error happened.
      });
  }


  return (
    <>
   {/* {activeSearch &&(
     <SearchModal searchQuery={searchQuery} setSearchQuery={setSearchQuery} setActiveSearch={setActiveSearch}
     users={users}/>
   )} */}
      <View style={{
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>



        <Text style={{ color: 'white', alignSelf: 'flex-start', marginTop:35, marginLeft: 30, fontSize: 25, fontWeight: '900' }}>Task Me   </Text>
        <Provider>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: -40, 
              marginRight: -200

            }}
          >
            <TouchableOpacity>
            <IconButton iconColor='white' icon={"magnify"} onPress={()=>navigation.navigate('searchmodal')}  />
            </TouchableOpacity>
            <TouchableOpacity >
              <IconButton iconColor='white' icon={"account-multiple-plus"}
                onPress={() => navigation.navigate('user')}
              />
            </TouchableOpacity>
            <View >
            <Menu
              backgroundColor={'white'}
              visible={visible}
              onRequestClose={hideMenu}
              animationDuration={0}
           
              anchor={<IconButton iconColor='white' icon={"dots-horizontal"} onPress={showMenu}></IconButton>}
            >
              <MenuItem   onPress={() => navigation.navigate('summarize')} >Summarize</MenuItem>
              <MenuItem onPress={() => navigation.navigate('editprofile')}  >Settings</MenuItem>
              <MenuItem onPress={() => onHandleLogout()}  >Logout</MenuItem>
            </Menu>
            </View>
          </View>
        </Provider>
      </View>
      <View style={{
        backgroundColor: 'white',
        padding: 35,
        flex: 1,
        marginTop: -485,
        justifyContent:'center',
       
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>

        {/* <View style={{flexDirection:'row',alignSelf:'flex-end',top:-138,marginRight:-30}}> */}

        <ScrollView>
          <Pressable onPress={()=>navigation.navigate('taskscreen')}>
          <ChatsScreen/></Pressable>
    

    </ScrollView>
      </View>
    </>
  )
}
const Styles = StyleSheet.create({
  container: {
    marginTop: 50
  },

})

export default Received