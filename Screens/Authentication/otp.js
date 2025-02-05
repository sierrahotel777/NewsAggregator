import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./otp.css";

const OTPScreen = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '', '', '']); 
    const inputs = useRef([]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) { 
            inputs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index) => {
        if (index > 0 && !otp[index]) {
            inputs.current[index - 1].focus();
        }
    };

    const verifyOTP = () => {
        const otpString = otp.join('');
        if (otpString.length === 6) { 
            console.log('Verifying OTP:', otpString);
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter complete OTP');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" size={24} color="#ffff" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Enter Verification Code</Text>
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={ref => inputs.current[index] = ref}
                            style={styles.otpInput}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    handleBackspace(index);
                                }
                            }}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.verifyButton}
                    onPress={verifyOTP}
                >
                    <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OTPScreen;