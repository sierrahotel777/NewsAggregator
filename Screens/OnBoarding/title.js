import React from 'react';
import { View, Text, Image } from 'react-native';


import styles from "./title.css";

const Title = () => {

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
