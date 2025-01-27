import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './nav.css.js';

const Navigation = () => {
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity>
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navItem}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navItem}>Bookmarks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Navigation;