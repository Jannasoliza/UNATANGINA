import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome.js';
import LoginScreen from './screens/log.js';
import Homepage from './screens/Hpage.js';
import Menubar from './screens/menubar.js';
import About from './screens/AboutApp.js';
import Announcement from './screens/Announcement.js';
import Notification from './screens/Notification.js';
import Transaction from './screens/Transaction.js';
import UpdateInfo from './screens/UpdateInfo.js';
import Feedback from './screens/Feedback.js';
import FireEmergency from './screens/FireEmergency.js';
import MedicalAssistance from './screens/MedicalAssistance.js';
import FacilityFailure from './screens/FacilityFailures.js';
import CrimeandViolence from './screens/CrimeandViolence.js'; 
import NaturalHazard from './screens/NaturalHazard.js';
import BiologicalHazard from './screens/BiologicalHazard.js';
import EmergencyCamera from './screens/EmergencyCamera.js';



const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/agapaybg.jpg')}
        style={styles.background}
      >
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
        name="Menubar"
        component={Menubar}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name = "About"
        component={About}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "Notification"
        component={Notification}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "Announcement"
        component={Announcement}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "Transaction"
        component={Transaction}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "UpdateInfo"
        component={UpdateInfo}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "Feedback"
        component={Feedback}
        option = {{headerShown :false}}
        />
         <Stack.Screen
        name = "FireEmergency"
        component={FireEmergency}
        option = {{headerShown :false}}
        />
         <Stack.Screen
        name = "MedicalAssistance"
        component={MedicalAssistance}
        option = {{headerShown :false}}
        />
         <Stack.Screen
        name = "FacilityFailure"
        component={FacilityFailure}
        option = {{headerShown :false}}
        />
         <Stack.Screen
        name = "CrimeandViolence"
        component={CrimeandViolence}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "NaturalHazard"
        component={NaturalHazard}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "BiologicalHazard"
        component={BiologicalHazard}
        option = {{headerShown :false}}
        />
        <Stack.Screen
        name = "EmergencyCamera"
        component={EmergencyCamera}
        option = {{headerShown :false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#7E0000',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84, // Adds shadow on iOS
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});