import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './header.css.js';
import { useNavigation } from '@react-navigation/native';


const Navigation = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.appTitle}>Daily Digest</Text>
                <Image source={require('../Images/logo.png')} style={styles.iconlogo} onPress={() => { navigation.navigate('Home') }} />
            </View>
        </View>
    );
}

export default Navigation;