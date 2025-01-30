import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-number-input';
import styles from "./registration.css";

const Login = () => {
    const [countryCode, setCountryCode] = useState('');
    const [callingCode, setCallingCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleRegistration = () => {
        if (phoneNumber.length > 0) {
            console.log('Name:', name, 'Email:', email);
            console.log('Registration Successful', `Phone Number: ${callingCode} ${phoneNumber}`);
        } else {
            console.log('Error', 'Please enter a valid phone number.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginBottom: 10, color: '#ff3131' }]}>Hello!</Text>
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
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
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

            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
                <Text style={styles.registerButtonText}>Get OTP</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;
