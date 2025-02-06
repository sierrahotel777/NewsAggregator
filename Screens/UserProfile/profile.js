import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './profile.css';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import Header from '../Components/header.js';
import Navigation from '../Components/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //const userPhone = route.params?.phone; // Get phone number from navigation parameters
  const [user, setUser] = useState(null);
  const userPhone = '9150688847';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userPhone) return;

      try {
        const response = await axios.post('http://192.168.0.113:8000/NA/v1/GetUser', {
          mobileno: userPhone
        });
        if (response.data.message === 'Success') {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userPhone]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF5733" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Image
          source={user?.profile ? { uri: user.profile } : require('../Images/user.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{user?.name || 'Guest'}</Text>
        <Text style={styles.bio}>{user?.bio || 'No bio available'}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('UpdateProfile')}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Help')}>
          <Text style={styles.settingText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Title')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.settingText, { color: '#FF5733' }]}>Logout</Text>
            <Icon name="sign-in" size={16} color="#FF5733" />
          </View>
        </TouchableOpacity>
      </View>
      <Navigation />
    </View>
  );
};

export default Profile;
