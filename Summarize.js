import { View, Text,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import  { TextInput, Button, IconButton, Menu, Divider, Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { ListItem,Avatar } from 'react-native-elements';
import { FlatList } from 'react-native';
import ChatScreen from './src/screens/ChatScreen2';
import ChatsScreen from './src/screens/ChatsScreen';


const data=[
  {
    id: 1,
   title: 'Recevied   ',
  },
  {
    id: 2,
    title: '  Given   ',
  },
  {
    id: 3,
    title: 'My Task   ',
  },
  {
    id: 4,
    title: '  All Tasks ',
  }
]
const Summarize = ({navigation}) => {
  const Item = ({title}) => (
    <View style={{marginTop:60,marginLeft:20,flex:1,flexDirection:'row',justifyContent:'space-between'
  }}>
      <Text style={{fontSize:13,color:'white'}}>{title}</Text>
    </View>);

  return (
    <>
   <View style={{
        padding: 35,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        backgroundColor: 'black'
      }}>
        <Text style={{ color: 'white',marginLeft:25 ,fontSize: 25, fontWeight: '700',top:75,justifyContent:'space-evenly' }}>  Summarize
        </Text>
        <View style={{flexDirection:'row',alignSelf:'flex-end',top:30,}}>
        <TouchableOpacity>
            <IconButton  iconColor='white' icon={"magnify"} onPress={()=>navigation.navigate('searchmodal')}  />
            </TouchableOpacity>
            <TouchableOpacity >
              <IconButton iconColor='white' icon={"account-multiple-plus"}
                onPress={() => navigation.navigate('user')}
              />
            </TouchableOpacity>
            <IconButton iconColor='white' icon={"dots-horizontal"} />
            
            </View>
           
            <FlatList 
            data={data} 
            horizontal
            // keyExtractor={(item)=>item.id}
            renderItem={({item}) => <Item title={item.title} />}
            />
           
      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 35,
        flex: 3.5,  
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      }}>
           
          <ChatsScreen/>

      </View>
        </>
)}

export default Summarize