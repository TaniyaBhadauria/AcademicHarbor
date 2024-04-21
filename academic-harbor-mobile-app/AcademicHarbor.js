import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AcademicHarborPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = () => {
     navigation.navigate('SignIn');
  };
  const handleRepository = () => {
    navigation.navigate('Repository');
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffcc00',
    },
    header: {
      backgroundColor: '#000',
      paddingHorizontal: 20,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    logo: {
      height: 50,
      resizeMode: 'contain',
    },
    headerText: {
      color: '#fff',
      fontSize: 18,
    },
    icon: {
      padding: 10,
    },
    menu: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuItem: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 10,
    },
    signIn: {
      fontWeight: 'bold',
    },
    repository: {
      fontWeight: 'bold',
    },
    signUp: {
      fontWeight: 'bold',
    },
    content: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#333',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footer: {
      backgroundColor: '#333',
      paddingVertical: 20,
      alignItems: 'center',
    },
    footerText: {
      color: '#fff',
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/umbc_logo.png')} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Ionicons name="home" size={24} color="white" style={styles.icon} />
        <Text style={styles.headerText}>AcademicHarbor</Text>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Ionicons name="menu" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showMenu && (
        <View style={styles.menu}>
          <Text style={[styles.menuItem, styles.repository]} onPress={handleRepository}>Repository</Text>
          <Text style={styles.menuItem}>Projects</Text>
          <Text style={styles.menuItem}>User Profiles</Text>
          <Text style={styles.menuItem}>Inbox</Text>
          <Text style={[styles.menuItem, styles.signIn]} onPress={handleSignIn}>Sign In</Text>
          <Text style={[styles.menuItem, styles.signUp]}>Sign Up</Text>
        </View>
      )}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Welcome to AcademicHarbor</Text>
        <Text style={styles.subtitle}>
          At AcademicHarbor, we believe in the power of collaboration to drive academic excellence.
          Our platform connects students, researchers, and scholars across disciplines, fostering
          innovation and knowledge exchange.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started Today!</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 AcademicHarbor. All rights reserved.</Text>
      </View>
    </View>
  );
};

export default AcademicHarborPage;
