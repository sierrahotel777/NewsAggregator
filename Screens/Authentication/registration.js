import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from "./registration.css";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '@env';

const Register = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const validateForm = () => {
        if (!name.trim()) {
            Alert.alert('Error', 'Please enter your name');
            return false;
        }
        if (!email.trim() || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Error', 'Please enter a valid email');
            return false;
        }
        if (!phoneNumber || phoneNumber.length < 10) {
            Alert.alert('Error', 'Please enter a valid phone number');
            return false;
        }
        return true;
    };

    const handleRegistration = async () => {
        if (!validateForm()) return;

        try {
            const response = await axios.post(`${API_URL}/NA/v1/RegisterUser`, {
                name: name,
                email: email,
                phone: phoneNumber
            });

            if (response.data) {
                navigation.navigate('OTP', {
                    phone: phoneNumber,
                    email: email
                });
            }
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={[styles.title, { marginBottom: 10, color: '#ff3131' }]}>New User</Text>
            <Text style={styles.subtitle}>Sign-up to get Started</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.registerText}>
                    Already have an account?{' '}
                    <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}>
                        Login
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;
