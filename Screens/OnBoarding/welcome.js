import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./welcome.css";

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.subtitle}>Welcome to Daily Digest 🗞️</Text>
            <View style={styles.buttonContainer}>
                <Button title="Get Started" color="#ff3131" onPress={() => navigation.navigate('Register')} />
                <Text style={[styles.subtitle, { fontSize: 20, gap: 10, marginTop: 7, }]}>or</Text>
                <Button title="Login" color="#ff3131" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
};



export default Welcome;