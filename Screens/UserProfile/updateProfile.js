import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from './updateProfile.css.js';
import Navigation from '../Components/navigation';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const userPhone = '9150688847';
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
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
  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="close" style={styles.buttonText} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="check" style={styles.buttonText} onPress={() => navigation.goBack()} />
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
          {/* {Object.entries(user).map(([field, value]) => (
            <View key={field} style={styles.formGroup}>
              <Text style={styles.label}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                {['email', 'phone'].includes(field) ? ' *' : ''}
              </Text>
              <TextInput
                value={value}
                onChangeText={(text) => handleInputChange(field, text)}
                style={styles.input}
              />
            </View>
          ))} */}
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder={user?.name}
            placeholderTextColor="#888"
            value={user?.name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Bio</Text>

          <TextInput
            style={styles.input}
            placeholder={user?.bio}
            placeholderTextColor="#888"
            value={user?.bio}
            onChangeText={setName}
          />
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder={user?.email}
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={user?.email}
            onChangeText={setName}
          />
          <Text style={styles.label}>Phone Number</Text>

          <TextInput
            style={styles.input}
            placeholder={user?.mobileno}
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={user?.mobileno}
            onChangeText={setName}
            maxLength={10}
          />
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default UpdateProfile;
