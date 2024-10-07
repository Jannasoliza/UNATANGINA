import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'



export default function About ({navigation}) {
  return (

    <ScrollView
    vertical
    showsVerticalScrollIndicator = {false}
    style = {StyleSheet.ScrollView}
    contentContainerStyle = {styles.ScrollView}
    >
    <View style = {styles.bgcontainer}>
        <ImageBackground
        source = {require('../assets/agapaybg.jpg')}
        style = {styles.background}> 
        
        <Image
        source = {require("../assets/logo.png")}
        style = {styles.logo}/>
        <View style = {styles.container}>

        <Text style = {styles.text}>AGAPAY is a comprehensive emergency and disaster response system designed for both web and mobile platforms. It provides real-time alerts, crucial information, and resources during emergencies, ensuring swift and efficient response efforts. With features like GPS tracking, communication tools, and access to emergency services, AGAPAY empowers individuals and communities to stay safe and connected during crises. Developed with user-friendly interfaces and robust backend infrastructure, AGAPAY aims to enhance disaster preparedness and resilience at every universities. Let’s create a safer and more resilient future with us KA-AGAPAY</Text>
    
        </View>
        
        </ImageBackground>
    </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    bgcontainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
      background: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40,
      },
      container: {
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 3,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
     
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 220,
        paddingVertical: 10,
        paddingHorizontal:20,
        letterSpacing: 1,
      },
    ScrollView: {
      flex: 1,
    }

});