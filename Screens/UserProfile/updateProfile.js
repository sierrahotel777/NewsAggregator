import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './updateProfile.css.js';

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    username: 'mark_samuel',
    fullName: 'Mark Samuel',
    email: 'example@youremail.com',
    phone: '+911111111',
    bio: 'Lorem Ipsum is simply dummy text of the printing',
  });

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="close" style={styles.buttonText} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="check" style={styles.buttonText} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageSection}>
        <Image
          source={require('../Images/user.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editImageButton}>
          <Icon name="camera" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        {Object.entries(profile).map(([field, value]) => (
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
        ))}
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;
