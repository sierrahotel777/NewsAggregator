import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './title.css';

const Title = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Welcome');
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={require('../Images/logo.png')}
                    style={styles.icon}
                />
            </View>
            <Text style={styles.title}>Daily Digest</Text>
        </View>
    );
};

export default Title;