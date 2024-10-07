import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/agapaybg.jpg')}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}></Text>
                </TouchableOpacity>

                {/* Welcome Text */}
                <Text style={styles.welcomeText}>Welcome ka-AGAPAY!</Text>
                <Text style={styles.subText}>Log in as User</Text>

                {/* Logo */}
                <Image source={require('../assets/logo.png')} style={styles.logo} />

                {/* Login Form */}
                <View style={styles.loginContainer}>
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
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Homepage')}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Allows the ScrollView to grow with content
        paddingHorizontal: 2,
        justifyContent: 'center', // Center content vertically
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    backButton: {
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: 50, // Corrected weight to width
        paddingHorizontal: 20,
    },
    backButtonText: {
        fontSize: 60,
        color: '#7E0000', // Dark red color
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#000',
        paddingHorizontal: 30,
    },
    subText: {
        fontSize: 20,
        color: '#555',
        marginBottom: 20,
        paddingHorizontal: 30,
    },
    logo: {
        width: 250, // Adjusted size
        height: 250, // Adjusted size
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 20, // Adjusted spacing
    },
    loginContainer: {
        backgroundColor: '#7E0000', // Dark red color
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingVertical: 100,
        paddingHorizontal: 60,
        width: '100%',
        height: '90%',
        padding: 0,
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 18,
        color: '#000',
        elevation: 5, // Adds shadow on Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84, // Adds shadow on iOS
    },
    forgotButton: {
        alignSelf: 'flex-end', // Align to the right
        marginTop: 10,
    },
    forgotButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        alignSelf: 'flex-end', // Align to the right
        marginTop: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
