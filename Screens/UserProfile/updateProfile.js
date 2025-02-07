import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import styles from './updateProfile.css.js';
import Navigation from '../Components/navigation';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL, numb } from '@env';


const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const userPhone = numb;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      if (!userPhone) return;

      try {
        const response = await axios.post(`${API_URL}/NA/v1/GetUser`, {
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
  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return false;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      Alert.alert('Error', 'Please enter a valid email');
      return false;
    }
    return true;
  };
  const saveChanges = async () => {
    const updatedName = name.trim() || user?.name;
    const updatedBio = bio.trim() || user?.bio;
    const updatedEmail = email.trim() || user?.email;

    try {
      const response = await axios.patch(`${API_URL}/NA/v1/UpdateProfile`, {
        name: updatedName,
        bio: updatedBio,
        email: updatedEmail,
        mobileno: user?.mobileno
      });

      if (response.data) {
        Alert.alert('Success', 'Profile updated successfully');
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('Update error:', error);
      Alert.alert('Error', error.response?.data?.message || 'Update failed');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="close" style={styles.buttonText} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
          <TouchableOpacity style={styles.headerButton} onPress={saveChanges}>
            <Icon name="check" style={styles.buttonText} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileImageSection}>
          <Image
            source={user?.profile ? { uri: user.profile } : require('../Images/user.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Icon name="camera" />
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder={user?.name}
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Bio</Text>

          <TextInput
            style={styles.input}
            placeholder={user?.bio}
            placeholderTextColor="#888"
            value={bio}
            onChangeText={setBio}
          />
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder={user?.email}
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Phone Number (To change: support@dailydigest.com)</Text>

          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={user?.mobileno}
            editable={false}
            selectTextOnFocus={false}
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default UpdateProfile;
