import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-number-input';
import styles from "./login.css";

const Login = () => {
    const [countryCode, setCountryCode] = useState('');
    const [callingCode, setCallingCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleLogin = () => {
        if (phoneNumber.length > 0) {
            console.log('Login Successful', `Phone Number: ${callingCode} ${phoneNumber}`);
        } else {
            console.log('Error', 'Please enter a valid phone number.');
        }
    };
    const handleRegister = () => {
        console.log('Navigate to Register screen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={[styles.title, { marginBottom: 10, color: '#ff3131' }]}>Again!</Text>
            <Text style={styles.subtitle}>Welcome back, you’ve been missed</Text>
            <View style={styles.phoneContainer}>
                <CountryPicker
                    withFilter
                    withFlag
                    countryCode={countryCode}
                    withCallingCode
                    onSelect={(country) => {
                        setCountryCode(country.cca2);
                        setCallingCode(country.callingCode[0]);
                    }}
                    containerButtonStyle={styles.countryPicker}
                />
                <PhoneInput
                    defaultValue=""
                    defaultCode={countryCode}
                    layout="first"
                    onChangeFormattedText={(text) => setPhoneNumber(text)}
                    placeholder="Enter phone number"
                    containerStyle={styles.phoneInput}
                    textContainerStyle={styles.textInput}
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Get OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerText}>
                    Don’t have an account?{' '}
                    <Text style={styles.registerLink}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;
