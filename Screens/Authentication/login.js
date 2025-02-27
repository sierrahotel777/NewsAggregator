import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { API_URL } from '@env';
import styles from "./login.css";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();

    const validateForm = () => {
        if (!phoneNumber || phoneNumber.length < 10) {
            Alert.alert('Error', 'Please enter a valid phone number');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;
        try {
            const response = await axios.post(`${API_URL}/NA/v1/CheckUser`, {
                phone: phoneNumber
            });

            console.log('Login response:', response.data);
            if (response.status === 200 && response.data.message === 'User Exists') {
                navigation.navigate('OTP', { phone: phoneNumber });
            } else {
                navigation.navigate('Register');
            }
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            Alert.alert('Error', 'Unable to check user. Please try again.');
            navigation.navigate('Register');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Get OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.registerText}>
                    Don't have an account?{' '}
                    <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
                        Sign Up
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
