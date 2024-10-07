import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function FireEmergency({ navigation, route }) {
  const [reportText, setReportText] = useState('');
  const [capturedPhotos, setCapturedPhotos] = useState([]); 

  useEffect(() => {
    if (route.params?.photoUri) {
      setCapturedPhotos(prevPhotos => [...prevPhotos, route.params.photoUri]); 
    }
  }, [route.params?.photoUri]);

  const handleText = () => {
    const sosText = {
      reportText,
    };
    console.log('Feedback Submitted: ', sosText);
    resetFormData();
  };

  const resetFormData = () => {
    setReportText('');        
  };

  return (
    <ScrollView><View style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/maroonfire.png')} style={styles.image} />
      <Text style={styles.text}>FIRE EMERGENCY</Text>
    </View>

    <View style={styles.firstaid}>
      <ScrollView></ScrollView>
      <Text style={styles.firstaidText}>First Aid</Text>
      <Text style={styles.firstaidPro}>1. Check for safe space to evacuate</Text>
      <Text style={styles.firstaidPro}>2. Cover your nose with a damp piece of fabric to avoid suffocation</Text>
      <Text style={styles.firstaidPro}>3. Stay low</Text>
      <Text style={styles.firstaidPro}>4. DO NOT PANIC!</Text>
    </View>

    <View style={styles.actionsContainer}>
      {/* Display the captured photos if they exist */}
      {capturedPhotos.length > 0 && (
        <View style={styles.imageContainer}>
          {capturedPhotos.map((photoUri, index) => (
            <Image key={index} source={{ uri: photoUri }} style={styles.capturedImage} />
          ))}
        </View>
      )}


      <View style={styles.camcontainer}>
        <TouchableOpacity style={styles.cameraIconButton} onPress={() => navigation.navigate('EmergencyCamera')}>
          <Icon name="camera" size={50} color="#fff" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Type Here"
        placeholderTextColor="#666"
        multiline={true}
        value={reportText}
        onChangeText={setReportText}
      />

      <View style={styles.notificationButtons}>
        <TouchableOpacity style={styles.notifyButton} onPress={handleText}>
          <Text style={styles.notifyButtonText}>Send SOS </Text> 
        </TouchableOpacity>
      </View>
    </View>
  </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 0,
    height: 0,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
  },
  firstaid: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  firstaidText: {
    fontWeight: 'bold',
    fontSize: 20, 
    color: '#000',
    marginBottom: 10,
  },
  firstaidPro: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  actionsContainer: {
    backgroundColor: '#8B0000', 
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: 'center',
    height: 600,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  camcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  cameraIconButton: {
    backgroundColor: '#000', 
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationButtons: {
    width: '100%',
    alignItems: 'center',
  },
  notifyButton: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  notifyButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    height: 200,
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#f1f1f1',
    textAlignVertical: 'top',
    fontSize: 18,
  },
  capturedImage: {
    width: '20%', // Increased width for better visibility
    height: 60, // Set a fixed height for the images
    margin: 5, // Add margin for spacing
    borderRadius: 10,
    overflow: 'hidden',
  },
});
