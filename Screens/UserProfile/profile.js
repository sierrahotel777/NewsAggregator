import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './profile.css';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import Header from '../Components/header.js';
import Navigation from '../Components/navigation.js';

const Profile = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Image
          source={require('../Images/user.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Mark</Text>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <TouchableOpacity
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingItem]}>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={[styles.settingText, { color: "#FF5733" }]}>Logout</Text>
            <Icon name="sign-in" size={16} color="#fff" />
          </View>
        </TouchableOpacity>

      </View>
      <Navigation />
    </View>
  );
};

export default Profile;
