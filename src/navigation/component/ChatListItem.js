import { Text, View, Image, StyleSheet,Pressable, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
// import user from "../../../assets/chats.json"
import React, { useEffect, useState } from 'react'
import image from "../../../Profile"
 import relativeTime from "dayjs/plugin/relativeTime";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../../screens/ChatScreen2';
import Profile from '../../../Profile';
dayjs.extend(relativeTime);

const ChatListItem = ({navigation, contact}) => {
  const [image, setImage] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity >
      <Image
        source={require('../../../assets/user.png')}
        style={styles.image}
        
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
          {item.name}
          </Text>
          {/* <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text> */}
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
        {item.phoneNumbers ? item.phoneNumbers[0].number : ''}
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default ChatListItem;