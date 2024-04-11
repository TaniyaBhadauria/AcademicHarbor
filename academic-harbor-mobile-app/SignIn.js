import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // For example, you could make an API call to authenticate the user
    if (username === 'your_username' && password === 'your_password') {
      // If the sign-in is successful, navigate to the home page
      console.log('Sign-in successful!');
    } else {
      // Display an error message or handle the sign-in failure
      console.log('Invalid username or password');
    }
  };
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();

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
    signincontent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      signintitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      signinsubtitle: {
        fontSize: 16,
        marginBottom: 20,
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
      signinrememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      signincheckbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
      },
      signincheckboxInner: {
        width: 12,
        height: 12,
        backgroundColor: '#333',
      },
      signinrememberMeLabel: {
        marginLeft: 10,
      },
      signinbutton: {
        width: '100%',
        backgroundColor: '#333',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
      },
      signinbuttonText: {
        color: '#fff',
        fontSize: 16,
      },
      signinforgotPassword: {
        marginBottom: 10,
      },
      signinforgotPasswordText: {
        fontSize: 14,
        color: '#333',
      },
      signinsignUp: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      signinsignUpText: {
        fontSize: 14,
        color: '#333',
      },
      signinsignUpLink: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        marginLeft: 5,
      },
      signinfooter: {
        backgroundColor: '#333',
        paddingVertical: 20,
        alignItems: 'center',
      },
      signinfooterText: {
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
          <Text style={styles.menuItem}>Repository</Text>
          <Text style={styles.menuItem}>Projects</Text>
          <Text style={styles.menuItem}>User Profiles</Text>
          <Text style={styles.menuItem}>Inbox</Text>
          <Text style={[styles.menuItem, styles.signIn]} onPress={handleSignIn}>Sign In</Text>
          <Text style={[styles.menuItem, styles.signUp]}>Sign Up</Text>
        </View>
      )}

      <View style={styles.signincontent}>
        <Text style={styles.signintitle}>Welcome Back!</Text>
        <Text style={styles.signinsubtitle}>Please enter your credentials to login</Text>
        <TextInput
          style={styles.signininput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.signininput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.signinrememberMe}>
          <TouchableOpacity
            style={styles.signincheckbox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <View style={styles.signincheckboxInner} />}
          </TouchableOpacity>
          <Text style={styles.signinrememberMeLabel}>Remember me</Text>
        </View>
        <TouchableOpacity style={styles.signinbutton} onPress={handleSignIn}>
          <Text style={styles.signinbuttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signinforgotPassword}>
          <Text style={styles.signinforgotPasswordText}>Forgot Password?</Text>
        </View>
        <View style={styles.signinsignUp}>
          <Text style={styles.signinsignUpText}>Don't have an account?</Text>
          <Text style={styles.signinsignUpLink}>Sign Up</Text>
        </View>
      </View>

      <View style={styles.signinfooter}>
        <Text style={styles.signinfooterText}>&copy; 2024 AcademicHarbor. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc00',
  },
  header: {
    backgroundColor: '#ffcc00',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navbarLink: {
    color: '#333',
    fontSize: 16,
  },
  signIn: {
    fontWeight: 'bold',
  },
  signUp: {
    fontWeight: 'bold',
  },
  signincontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  signintitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signinsubtitle: {
    fontSize: 16,
    marginBottom: 20,
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
  signinrememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signincheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signincheckboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#333',
  },
  signinrememberMeLabel: {
    marginLeft: 10,
  },
  signinbutton: {
    width: '100%',
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  signinbuttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signinforgotPassword: {
    marginBottom: 10,
  },
  signinforgotPasswordText: {
    fontSize: 14,
    color: '#333',
  },
  signinsignUp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signinsignUpText: {
    fontSize: 14,
    color: '#333',
  },
  signinsignUpLink: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signinfooter: {
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
  },
  signinfooterText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SignInPage;