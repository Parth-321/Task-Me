import { View, Text, StatusBar, TouchableOpacity, Image, checkbox } from 'react-native'
import React, { useState } from 'react'
import Avatar, { TextInput, Button, IconButton } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPInputView from 'react-native-otp-input'
// import { useClipboard } from '@react-native-clipboard/clipboard'


const Verification = ({ navigation }) => {
const [otp,setOtp]=useState("")
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
        <IconButton style={{ marginLeft: -300, marginTop: 40 }} icon={"arrow-left"} onPress={() => navigation.navigate('login')} />
        <Text style={{ color: 'white', textAlign: 'center', marginTop: -45, fontSize: 30, fontWeight: '900' }}>Verification  </Text>

      </View>

      <View style={{
        backgroundColor: 'white',
        padding: 35,
        flex: 1,
        marginTop: -380,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Image style={{ height: 120, width: 120, marginTop: 0, alignSelf: 'center' }} source={require('./assets/i2.png')} />

        <Text style={{ marginTop: 20, fontSize: 25, color: '#1BA9AD', fontWeight: '900', textAlign: 'center' }} >Verification Code</Text>
        <Text style={{ textAlign: 'center', fontSize: 15 }}>We Have Sent the  Verification Code to the{"\n"}Your Mobile Number </Text>


        {/* <View style={{ flex: 1, alignSelf: 'center', marginTop: -55, marginLeft:20 }}> */}
          <OTPInputView
            style={{ width: '80%',marginTop:-400, alignSelf:'center'}}
            pinCount={4}
            value={otp}
            code=""
            onChange={setOtp}
            autoFocusOnLoad
            onCodeFilled={(code => {
              console.log(`Code is ${code}, you are good to go!`)
            })}
          ></OTPInputView>
        {/* </View> */}

        <View style={{ flexDirection: 'row', marginTop:-450 }}>
          <Text style={{ marginTop: 50, fontSize: 16, fontWeight: '900', marginLeft: 80 }} > +01-202-555-0102</Text>
          <IconButton style={{ marginTop: 77, bottom: 32, marginLeft: 0, marginRight: 80 }} size={16} iconColor={'#1BA9AD'} icon={"pen"}
            onPress={() => navigation.navigate('login')}
          /></View>
        <Button borderRadius={10} borderColor={'black'}
          style={{ marginTop: -20, borderWidth: 1, backgroundColor: 'white', borderColor: 'black', paddingTop: 5, borderRadius: 5 }} height={50}
          mode="contained"
          onPress={() => navigation.navigate('verification')}>
          <Text style={{ color: 'black' }}> Send Again</Text>
        </Button>
        <Button style={{ marginTop: 20, marginBottom: 50, backgroundColor: '#1BA9AD', paddingTop: 5, borderRadius: 5 }} height={50}
          mode="contained" onPress={() => navigation.navigate('profile')}>
          Submit
        </Button>
      </View>
    </>
  )
}

export default Verification