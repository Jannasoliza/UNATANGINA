import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menubar({ navigation }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.appContainer}>
      <View style={[styles.sidebar, isOpen ? styles.open : styles.closed]}>
        <TouchableOpacity style={styles.toggleBtn} onPress={toggleSidebar}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Text style={styles.logoText}>AGAPAY</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} 
          onPress ={() => navigation.navigate ('About')}> 
            <Icon name="info-circle" size={28} color="#fff" />
            <Text style={styles.menuText}>About the application</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress ={() => navigation.navigate ('Notification')}>
            <Icon name="bell" size={28} color="#fff" />
            <Text style={styles.menuText}>Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress ={() => navigation.navigate ('Announcement')}>
            <Icon name="bullhorn" size={28} color="#fff" />
            <Text style={styles.menuText}>Announcement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress = {() => navigation.navigate ('Transaction')}>
            <Icon name="history" size={28} color="#fff" />
            <Text style={styles.menuText}>Transaction History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress={() => navigation.navigate ('UpdateInfo')}>
            <Icon name="refresh" size={28} color="#fff" />
            <Text style={styles.menuText}>Update Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress = {() => navigation.navigate ('Feedback')}>
            <Icon name="star" size={28} color="#fff" />
            <Text style={styles.menuText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {/* Your content goes here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    backgroundColor: '#800000',
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: 250,
    transition: 'width 0.3s ease',
  },
  open: {
    width: 250,
  },
  closed: {
    width: 60,
  },
  toggleBtn: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  logo: {
    marginVertical: 30,
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
});