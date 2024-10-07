import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {RadioButton} from 'react-native-paper';



export default function Notification({navigation}) {


  const [alertType, setAlertType] = useState('ringVibrate');

  return (
    <View>
     <Image
     source = {require('../assets/logo.png')}
     style={styles.logo} />
      <Text style={styles.header}>Alert Mechanism</Text>

      <View style={styles.container}>

      <View style = {styles.radioButton}>
        <RadioButton
        value='ringVibrate'
        status={alertType === 'ringVibrate' ? 'checked' : 'unchecked'}
        onPress = {() => setAlertType('ringVibrate')}
        color = "maroon"
        />     
        <Text style={styles.radioText}>Ring and Vibrate</Text>
      </View>
  

      <View style = {styles.radioButton}>
        <RadioButton
        value='ringOnly'
        status={alertType === 'ringOnly'? 'checked' : 'unchecked'}
        onPress = {() => setAlertType('ringOnly')}
        color = "maroon"
        />      
        <Text style={styles.radioText}>Ring Only</Text>
     </View>


        <View style={styles.radioButton}>
          <RadioButton
          value='vibrateOnly'
          status={alertType === 'vibrateOnly'? 'checked' : 'unchecked'}
          onPress = {() => setAlertType('vibrateOnly')}
          color = "maroon"
          />
                  <Text style={styles.radioText}>Vibrate Only</Text>
        </View>
    


     </View>
     <Text style={styles.header}>Alert Mechanism</Text>


    </View>


  );
}






const styles = StyleSheet.create({
 
  logo:{
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 0,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
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
  header: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 15,
    padding: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    fontSize: 18,
    fontWeight: '700',
  },
})