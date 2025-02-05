import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './nav.css.js';

const Navigation = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TrendingNews')}>
                <Text style={styles.navItem}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
                <Text style={styles.navItem}>Bookmarks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navigation;