import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,ActivityIndicator } from 'react-native';
import Home from '../../Home';
import Login from '../../Login';
import Profile from '../../Profile';
import Received from '../../Received';
import Settings from '../../Settings';
import Summarize from '../../Summarize';
import Verification from '../../Verification';
import Camera from '../../Camera';
import Exampal from '../../Exampal';

import chat from '../../Chat';
import Signup from '../../Signup';
import ChatListItem from './component/ChatListItem';
import ChatScreen from '../screens/ChatScreen2';
import SearchModal from './component/SearchModal';
import User from '../../User';
import EditProfile from '../screens/EditProfile';
import TaskScreen from '../screens/TaskScreen';





const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
              <Stack.Navigator initialRouteName='home' >
             
              <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
              <Stack.Screen name="login" component={Login} options={{headerShown:false}}  />
              <Stack.Screen name="signup" component={Signup}   options={{headerShown:false}}  />
              <Stack.Screen name="verification" component={Verification}   options={{headerShown:false}} />
             
              <Stack.Screen name="taskscreen" component={TaskScreen}   options={{headerShown:false}}/>
              <Stack.Screen name="editprofile" component={EditProfile}   options={{headerShown:false}} />
              <Stack.Screen name="user" component={User}  />
              <Stack.Screen name="searchmodal" component={SearchModal}  options={{headerShown:false}}  />
              <Stack.Screen name="chat2" component={ChatScreen}  />
              {/* <Stack.Screen name="chat" component={chat}  /> */}
              <Stack.Screen name="profile" component={Profile}  options={{headerShown:false}}   />
              <Stack.Screen name="received" component={Received}  options={{headerShown:false}} />
              <Stack.Screen name="summarize" component={Summarize}  />
              <Stack.Screen name="settings" component={Settings}  />           
              <Stack.Screen name="exampal" component={Exampal}  />
              <Stack.Screen name="camera" component={Camera}  options={{headerShown:false}}  />
              </Stack.Navigator>
            </NavigationContainer>
    );
};
function RootNavigator() {
    return(
        <NavigationContainer>
            <ChatStack />
        </NavigationContainer>
    )
    
}
export default Navigator;