import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Or import it from 'react-native-vector-icons'
import StarRating from 'react-native-star-rating-widget';

export default function FeedbackComponent({ navigation }) {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [displayWithName, setDisplayWithName] = useState(false); 
  const [displayAnonymously, setDisplayAnonymously] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const openModal = (alertType) => {
    setSelectedAlert(alertType);
  };
  const closeModal = () => {
    setSelectedAlert(null);
  }; 
  const handleConfirm = () => {
    closeModal();
  };


  const handleFeedbackSubmit = () => {
    const feedbackData = {
      rating,
      feedbackText,
      displayWithName,
      displayAnonymously,
    };
    console.log('Feedback Submitted: ', feedbackData);
    resetFormData();
  };

  const resetFormData = () => {
    setRating(0);                // Reset
    setFeedbackText('');          // Clear
    setDisplayWithName(false);    // Reset 
    setDisplayAnonymously(false); // Reset
  };

  const handleCheckboxChange = (type) => {
    if (type === 'name') {
      setDisplayWithName(true);
      setDisplayAnonymously(false);
    } else {
      setDisplayWithName(false);
      setDisplayAnonymously(true);
    }
  };


  const CustomCheckBox = ({ value, onValueChange, label }) => {
    return (
      <TouchableOpacity style={styles.checkboxRow} onPress={() => onValueChange(!value)}>
        <MaterialIcons
          name={value ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={value ? '#800000' : 'gray'}
        />
        <Text style={styles.checkboxLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
  

      <View style={styles.logoSection}>
        <Text style={styles.logoText}>AGAPAY</Text>
      </View>

      <Text style={styles.reviewText}>Leave a review</Text>
       <View style={styles.checkboxContainer}>
        {/* Display with name checkbox */}
        <CustomCheckBox
          value={displayWithName}
          onValueChange={() => handleCheckboxChange('name')}
          label="Display with your name"
        />
        
        {/* Display anonymously checkbox */}
        <CustomCheckBox
          value={displayAnonymously}
          onValueChange={() => handleCheckboxChange('anonymous')}
          label="Display Anonymously"
        />
      </View>


      <StarRating
        rating={rating}
        onChange={setRating}
        color="#800000"
        starSize={30}
        style={styles.starRating}
      />


      <TextInput
        style={styles.input}
        placeholder="Type Here"
        placeholderTextColor="#666"
        multiline={true}
        value={feedbackText}
        onChangeText={setFeedbackText}
      />


      <TouchableOpacity style={styles.button} onPress={() =>openModal("handleFeedbackSubmit")}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
        
        {selectedAlert && (
        <Modal
          animationType=""
          transparent={true}
          visible={selectedAlert !== null}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Do you want to send the Feedback?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.buttonModal} onPress={handleConfirm}>
                  <Text style={styles.buttonmodaltext}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal} onPress={closeModal}>
                  <Text style={styles.buttonmodaltext}>NO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </Modal>
        )}
      </TouchableOpacity>
  
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800000',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontWeight: '900',
    fontSize: 45,
    marginBottom: 10,
    color: '#800000',
  },
  reviewText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 16,
  },
  starRating: { 
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    height: 250,
    width:'90%',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'top',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonModal: {
    backgroundColor: '#7E0000',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonmodaltext: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});