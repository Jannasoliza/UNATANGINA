import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'


export default function UpdateInfo ({})  {
  return (
    <>
    <View style={styles.header}>
    <Image source={require('../assets/circle.png')} style={styles.circle}/>
    </View>
    

    <View style={styles.lower}>
    <TextInput
    placeholder="Institutional Account"
    placeholderTextColor="#999"
    style={styles.input}
    />
    <TextInput
    placeholder="Password"
    placeholderTextColor="#999"
    secureTextEntry
    style={styles.input}
    />

    </View>
    </>
   
  );
}


const styles = StyleSheet.create({

  circle: {
   width: 470,
   height: 460,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
   marginBottom: 400,
   top: -180,
  },
  lower:{
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
  }

})