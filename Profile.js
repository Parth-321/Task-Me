import { View, Text, text, StatusBar, TouchableOpacity, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, IconButton, Icon,AvatarIconProps, Avatar } from 'react-native-paper'
import { colors, defaultStyle } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { defaultImg } from './styles';
// import { Avatar } from '@rneui/themed';
import { collection, setDoc,doc} from "firebase/firestore";
import { auth, db } from "./config/firebase"
import { Alert } from 'react-native';






const Profile = ({ navigation, route }) => {
  // const [avatar, setAvatar] = useState("");
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [image, setImage] = useState("");


  const saveData = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      FirstName: firstname,
      Lastname: lastname
    })
    .then(()=>{
      alert("Your Profile is update");
    });
  }
  // if (avatar !== "") {
  //   myForm.append("file", {
  //     uri: avatar,
  //     type: mime.getType(avatar),
  //     name: avatar.split("/").pop(),
  //   })
   
  // }

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
      // dispatch updatePic Here
      // const myForm = new FormData();
      // myForm.append("file", {
      //   uri: route.params.image,
      //   type: mime.getType(route.params.image),
      //   name: route.params.image.split("/").pop(),
      // });
     
    }

  }, [route.params]);


  // useEffect(() => {
  //   if (user?.avatar) {
  //     setAvatar(user.avatar.url);
  //   }
  // }, [user]);

  return (
    <>
      <View style={{
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>
        <IconButton style={{ marginLeft: -300, marginTop: 40, top: 0 }} icon={"arrow-left"} onPress={() => navigation.navigate('login')} />
        <Text style={{ color: 'white', textAlign: 'center', marginTop: -50, fontSize: 25, fontWeight: '700' }}>  Cover Photo   </Text>
       
      </View>
      <View style={{
        backgroundColor: '#F9F1F0',
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>

        <View
          style={{
            alignSelf: 'center',
            borderRadius: 100,
            size: 150,
            marginTop: -90,
            backgroundColor: 'gray'
          }}
        >
          
          <TouchableOpacity onPress={() =>
            navigation.navigate("camera",{Profile:true})}>
            <Avatar.Image
              size={125}
              rounded 
              source={{
                uri: image ? image : defaultImg,
              }} />
          </TouchableOpacity>
        </View>




        
        <Text style={{ marginTop: 70, fontSize: 15, fontWeight: '900', paddingLeft: 5 }} >First Name</Text>
        <TextInput
          style={{ marginTop: 5, borderWidth: 1, height: 50, borderRadius: 5, paddingLeft: 10, borderColor: 'gray' }}
          mode="outlined"
          onChangeText={(text) => setFirstname(text)}
          placeholder="Enter Your First Name"

        />
        <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '900', borderColor: 'gray', paddingLeft: 5 }} >Last Name</Text>
        <TextInput
          style={{ marginTop: 5, borderWidth: 1, height: 50, borderRadius: 5, paddingLeft: 10, borderColor: 'gray' }}
          mode="outlined"
          placeholderTextColor={'gray'}
          placeholder="Enter Your Last Name"
          onChangeText={(text) => setLastname(text)}

        />

        <Button style={{ marginTop: 40, backgroundColor: '#1BA9AD', paddingTop: 5, borderRadius: 5 }} height={50}
          mode="contained"
          placeholderTextColor={'gray'}
          onPress={() => saveData()
            .then(() => navigation.navigate("received"))
            .catch((err) => Alert.alert("firestore", err.message))}>
          Let’s Get Started
        </Button>

      </View>
     

    </>
  )
}

export default Profile