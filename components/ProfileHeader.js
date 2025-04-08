import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles/profileStyle';




const ProfileHeader = ({ name, subtitle, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.bioText}>
      KELAS TI 23 KA 
    </Text>
    <TouchableOpacity
  style={styles.button}
  onPress={() => Linking.openURL('https://www.instagram.com/jiisung.__/')}
>
  <Text style={styles.buttonText}>View Profile</Text>
</TouchableOpacity>

  </View>
);

export default ProfileHeader;
