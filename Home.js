import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
// import checkbox from '@react-native-community/checkbox';
import Avatar, { TextInput, Button, IconButton } from 'react-native-paper'
import { Image } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { useState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
  return (
    <>
      <View style={{
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F9F1F0'
      }}>
      {/* <StatusBar hidden={true}/> */}
      
        <Image
          style={{
            marginTop: 60, 
          }}
          source={require("./assets/img1.png")}
        />

      </View>
      <View style={{
        backgroundColor: 'black',
        padding: 35,
        flex: 1,
        marginTop: -100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Text style={{ marginTop: 0, textAlign: 'center', color: 'white', fontSize: 32, fontWeight: '900', paddingLeft: 5 }} >Welcome! </Text>


        {/* <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'white', paddingTop: 5, color: 'white', height: 50, borderRadius: 5 }}
          onPress={() => navigation.navigate('verification')}>
          <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 10, color: '#29B8BC' }}> CREATE AN ACCOUNT</Text>

        </TouchableOpacity> */}
        
          <Button style={{marginTop: 40,backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingTop: 5, height: 50, borderRadius: 5 }}
          mode="contained"
          disabled={!checked}
          textColor='#29B8BC'
          onPress={() => navigation.navigate('signup')}>CREATE AN ACCOUNT</Button>


        <Button 
        
         disabled={!checked}
        style={{ marginTop: 20, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingTop: 5, height: 50, borderRadius: 5 }}
          mode="contained"
          textColor='#29B8BC'
          onPress={() => navigation.navigate('login')}>
          LOG IN
        </Button>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox top={17} 
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 20, fontSize: 12, color: 'white' }} >
            By Creating an account, you agree to our{"\n"}
            Tearms & Conditions and agree to Privacy Policy.     </Text>
        </View>
      </View>
    </>
  )
}

export default Home