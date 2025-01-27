import React from 'react';
import { View, SafeAreaView } from 'react-native';
import UpdateProfile from './Screens/UserProfile/updateProfile';
import Navigation from './Screens/Components/navigation';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 60 }}>
        <UpdateProfile />
      </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;