import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
    const handleSignIn = () => {
       navigation.navigate('SignIn');
    };
  const handleSignUp = () => {
    // Implement your sign-up logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
      return;
    }
    console.log('Sign-up successful!');
    // After successful sign-up, navigate to the home page
    // navigation.navigate('HomeScreen'); // Change 'HomeScreen' to your home screen's name
  };

  const handleProjects = () => {
  navigation.navigate('Projects');
  };
    const handleRepository = () => {
      navigation.navigate('Repository');
    }
    const handleInbox = () => {
      navigation.navigate('Inbox');
   };

   const handleNotifications = () => {
    navigation.navigate('Notification');
  };
   const handleUserProfilePage = () => {
    navigation.navigate('UserProfilePage');
  };

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
                        <Text style={styles.menuItem} onPress={handleProjects} >Projects</Text>
                        <Text style={styles.menuItem} onPress={handleUserProfilePage}>User Profiles</Text>
                        <Text style={styles.menuItem} onPress={handleInbox}>Inbox</Text>
                        <Text style={styles.menuItem} onPress={handleNotifications}>Notification</Text>
                        <Text style={[styles.menuItem, styles.signIn]} onPress={handleSignIn}>Sign In</Text>
                        <Text style={[styles.menuItem, styles.signUp]} onPress={handleSignUp}>Sign Up</Text>
            </View>
          )}

      <View style={styles.content}>
        <Text style={styles.title}>Create Your Account</Text>
        <TextInput
          style={styles.signininput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.signininput}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.signininput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.signininput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signinsignUp}>
          <Text style={styles.signinsignUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signUpLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 AcademicHarbor. All rights reserved.</Text>
      </View>
    </View>
  );
};

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffcc00",
    },
    header: {
      backgroundColor: "#000",
      paddingHorizontal: 20,
      paddingVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    logo: {
      height: 50,
      resizeMode: "contain",
    },
    headerText: {
      color: "#fff",
      fontSize: 18,
    },
    icon: {
      padding: 10,
    },
    menu: {
      backgroundColor: "#000",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuItem: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 10,
    },
    content: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 30,
    },
    addProjectButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    addProjectButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 10,
    },
    footer: {
      backgroundColor: "#333",
      paddingVertical: 20,
      alignItems: "center",
    },
    footerText: {
      color: "#fff",
      fontSize: 14,
    },
    popup: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    popupContent: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      width: 300, // Adjust width as needed
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    filterDropdown: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    filterButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    filterButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 10,
    },
    clearButton: {
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
    },
    clearButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    dropdownContent: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 4,
      marginTop: 10,
    },
    searchInput: {
      backgroundColor: "#eee",
      padding: 10,
      borderRadius: 4,
    },
    formTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: "#333",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      alignItems: "center",
    },
      signininput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
      signinsignUp: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      signinsignUpText: {
        fontSize: 14,
        color: '#333',
      },
  });

export default SignUpPage;
