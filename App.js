// App.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import styles from './components/styles/profileStyle';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ece9f1" />
      <ProfileHeader
        name="EGI ABDUL AZIS SAPUTRA"
        subtitle="232310017"
        image={require('./assets/icon/icon.png')} // Ganti sesuai foto kamu
      />
    </View>
  );
}
