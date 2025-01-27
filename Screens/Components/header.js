import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './header.css.js';

const Navigation = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.appTitle}>Daily Digest</Text>
                <Image source={require('../Images/logo.png')} style={styles.iconlogo} />
            </View>
        </View>
    );
}

export default Navigation;