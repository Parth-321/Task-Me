import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import DATA from '../../tasklist.json'
import image from "../../Profile"
import { defaultImg } from '../../styles';
import { FlatList } from 'react-native'
import { Avatar, Checkbox, IconButton, Item } from 'react-native-paper'
import { Icon, Image } from 'react-native-elements'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Received from '../../Received';
import InputBox from '../inputbox';
import ChatScreen from './ChatScreen2';



const TaskScreen = ({ navigation }) => {
  const route=useRoute();
  const [checked, setChecked] = React.useState(false);
  const Item = ({ title }) => (

    <View style={styles.item} >
      <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', paddingLeft: 20 }} >
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }} />
        <Text style={styles.title}>       {title}                            </Text>
        <Avatar.Icon style={{ backgroundColor: '#F9F9F9', }} size={30} icon="clock-outline" />
       
      </View>
    </View>

  );


  return (
    <SafeAreaView style={styles.container}>

      <View style={{ backgroundColor: "black", height: 90, flexDirection: 'row', }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('received')}>
            <Avatar.Icon color='#1BA9AD' icon={'arrow-left'} size={20} style={{ backgroundColor: '#E5FEFF', justifyContent: 'center', marginLeft: 10 }}
            /></TouchableOpacity>
          <Avatar.Image size={55}  source={{ uri: image ? image : defaultImg}} 
          style={{ justifyContent: 'center', marginLeft: 20 }} />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', paddingLeft: 10 }}>Andrey Boro</Text>


        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 130 }}>
          <Avatar.Icon size={35} icon={'magnify'} style={{ backgroundColor: 'black', }} /></View>
      </View>
     
      {/* <TouchableOpacity onPress={()=> navigation.navigate('chat2')}> */}
    
      <FlatList
       
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      //   keyExtractor={item => item.id}
      />
       <View>
      <InputBox/> 
      </View>
      {/* </TouchableOpacity> */}
     
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',

    backgroundColor: '#F9F9F9',
    //   padding: 20,
    paddingTop: 20,
    height: 60,
    paddingBottom: 20,

    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    alignSelf: "center",
    fontSize: 15,

  },
});


export default TaskScreen