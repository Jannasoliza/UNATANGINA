import React, {useState} from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';

export default function Homepage ({navigation}) {

  const [selectedAlert, setSelectedAlert] = useState(null);

  const openModal = (alertType) => {
    setSelectedAlert(alertType);
  };

  const closeModal = () => {
    setSelectedAlert(null);
  }; 

  const handleConfirm = () => {
    closeModal();


    switch (selectedAlert) {
      case 'Fire Emergency':
        navigation.navigate('FireEmergency');
        break;
      case 'Medical Assistance':
        navigation.navigate('MedicalAssistance');
        break;
      case 'Facility Failure':
        navigation.navigate('FacilityFailure');
        break;
      case 'Crime / Violence':
        navigation.navigate('CrimeandViolence');
        break;
      case 'Natural Hazard':
        navigation.navigate('NaturalHazard');
        break;
      case 'Biological Hazard':
        navigation.navigate('BiologicalHazard');
        break;
      default:
        break;
    }
  };
    


  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}
          onPress={() => navigation.navigate('Menubar')}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Hi Anna!</Text>
            <Text style={styles.subGreeting}>I am your ka-AGAPAY, I am ready to help you on your needs</Text>
          </View>
          <Image source={require('../assets/anna.png')} style={styles.profileImage} />
        </View>
    
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.upperScrollView}
        contentContainerStyle={styles.upperScrollContent}
      >
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>STAY INFORMED</Text>
          <Image
            source={require('../assets/stayinformed.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>
            Keep yourself updated on potential hazards or emergencies that could affect your area. Utilize news sources, weather forecasts, and community alerts.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>PRACTICE EVACUATION DRILLS</Text>
          <Image
            source={require('../assets/evacuation.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>
            Familiarize yourself with evacuation routes and practice using them.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>ALERT OTHERS</Text>
          <Image
            source={require('../assets/alertothers.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>
            If you discover a fire, immediately sound the alarm by shouting or activating the nearest fire alarm. Alert others in the vicinity to evacuate the building or area.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>ASSIST OTHERS</Text>
          <Image
            source={require('../assets/assistothers.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardDescription}>
            Help others evacuate safely, especially those who may need assistance.
          </Text>
        </View>
      </ScrollView>
      </View>


    <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>HOW CAN I HELP YOU?</Text>
        <View style={styles.grid}>
  
          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Fire Emergency")}>
            <Image source={require('../assets/whitefire.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>FIRE EMERGENCY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Medical Assistance")}>
            <Image source={require('../assets/whitemedical.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>MEDICAL ASSISTANCE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Facility Failure")}>
            <Image source={require('../assets/whitefacility.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>FACILITY FAILURE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Crime / Violence")}>
            <Image source={require('../assets/whiteviolence.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>CRIME / VIOLENCE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Natural Hazard")}>
            <Image source={require('../assets/whitenatural.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>NATURAL HAZARD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal("Biological Hazard")}>
            <Image source={require('../assets/whitebiological.png')} style={styles.gridIcon} />
            <Text style={styles.gridText}>BIOLOGICAL HAZARD</Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedAlert && (
        <Modal
          animationType=""
          transparent={true}
          visible={selectedAlert !== null}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Do you really want to send an SOS alert under {selectedAlert}?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                  <Text style={styles.buttonText}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={closeModal}>
                  <Text style={styles.buttonText}>NO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    backgroundColor: '#7E0000',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 0,
    paddingBottom: 30,
    paddingTop: 50,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  menuText: {
    fontSize: 24,
    color: '#FFF',
  },
  headerContent: {
    flex: 1,
    marginLeft: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    paddingTop:30,
  },
  greeting: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subGreeting: {
    color: '#FFF',
    fontSize: 14,

  },

  upperScrollContent: {
    paddingTop: 30,
    paddingLeft:90,
    paddingRight: 55,
  },
  infoCard: {
    width: 180,
    height: 200,
    backgroundColor: '#F5F5F5',

    headerContainer: {
      backgroundColor: '#7E0000',
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 0,
      paddingBottom: 30,
      paddingTop: 50,
    },
    
    borderRadius: 15,
    padding: 5,
    marginRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFB200',
    borderWidth: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTitle: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#212121',
  },
  cardDescription: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
  bottomSection: {
    padding: 30,
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  gridItem: {
    width: '45%',
    backgroundColor: '#7E0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84, // Adds shadow on iOS
  },
  gridIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
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
  button: {
    backgroundColor: '#7E0000',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});






