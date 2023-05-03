import { View, Text,FlatList,style,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import  Contact  from '../../src/navigation/component/ChatListItem';
import * as Contacts from 'expo-contacts'
import chats from '../../assets/chats.json';
import image from "../../Profile"
import { defaultImg } from '../../styles';
import Profile from '../../Profile';
// import chat2  from '../../chat2.json'
import ChatListItem from '../navigation/component/ChatListItem';
import { Image } from 'react-native-elements';
import { ListItem,Avatar } from 'react-native-elements';



const ChatScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data)
        }
      }
    })();
  }, []);
  // const keyExtractor = (item, idx) => {
  //   return item?.id?.toString() || idx.toString();
  // };
  // const renderItem = ({ item, index }) => {
  //   return <Contact contact={item} />;
  // };
  return (

    <FlatList
    data={contacts}
    // keyExtractor={keyExtractor}
    renderItem={({item,index})=>{
          return (
            <View style={styles.container}>
              <TouchableOpacity  >
      <Image
        source={{
          uri: image ? image : defaultImg,}}
        style={styles.image}
      />
      </TouchableOpacity>
     
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
     
    </View>
          )
        }}
        
   
    />
    
  )
}

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

export default ChatScreen