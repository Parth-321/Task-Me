import { View, Text,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';



const SearchModal = ({searchQuery, setActiveSearch, setSearchQuery,users=[], }) => {
    const navigation=useNavigation();

  return (
    <View 
    style={{width:"100%",height:"100%",
    position:'absolute',
    top:0,
   zIndex:100,
   padding:35,
   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}>
      <SafeAreaView>
        <Searchbar placeholder='Serch' onChangeText={(query)=>setSearchQuery(query)}
        value={searchQuery}
        style={{marginTop:20,}}/>
      </SafeAreaView>
    </View>
  )
}

export default SearchModal