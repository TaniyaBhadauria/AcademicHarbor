import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', sentDate: '2024-04-22', message: 'Your application for Machine learning project has been accepted' },
    { id: '2', sentDate: '2024-04-21', message: 'You have received a new message from Prof. Abdul' },
    { id: '3', sentDate: '2024-04-20', message: 'Your application for Digital image processing project has been rejected' },
    { id: '4', sentDate: '2024-04-19', message: 'You have received a new message from Avi' },
    { id: '5', sentDate: '2024-04-18', message: 'You have received a new message from Sina' },
  ]);
  const navigation = useNavigation();
   const handleSignIn = () => {
       navigation.navigate('SignIn');
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


const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.sentDate}</Text>
      <Text>{item.message}</Text>
    </View>
  );
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
                    <Text style={[styles.menuItem, styles.signUp]}>Sign Up</Text>
        </View>
      )}

     <View style={styles.container}>
           <Text style={styles.title}>Notifications</Text>
           <FlatList
             data={notifications}
             renderItem={renderItem}
             keyExtractor={item => item.id}
           />
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
        item: {
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 20,
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


export default NotificationPage;
