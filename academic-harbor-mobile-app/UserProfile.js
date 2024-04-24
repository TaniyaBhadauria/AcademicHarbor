import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfilePage = () => {
  const [userProfiles, setUserProfiles] = useState([
    { id: '1', name: 'John Doe', title: 'Professor', phone: '+1234567890', role: 'University of Maryland Baltimore County', linkedin: 'linkedin.com/johndoe', email: 'john.doe@example.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMAqlhWuIGI3KRHtfa4uq0ae6IL01Lhjb6FqUvgW6Rg&s' },
    { id: '2', name: 'Emilia Stone', title: 'Graduate Student', phone: '+9876543210', role: 'University of Maryland Baltimore County', linkedin: 'linkedin.com/stoned',
    email: 'stone.d@example.com', profilePicture: 'https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=612x612&w=0&k=20&c=GCkoeN4GXE9W3EgNmwnInZpvGEepUSPd7N8NMKGBGFs=' },
  ]);
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  const handleHome = () => {
    navigation.navigate('AcademicHarbor');
  }
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
    <View style={styles.userProfile}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.phone}><Ionicons name="call" size={16} color="#000" /> {item.phone}</Text>
        <Text style={styles.linkedin}><Ionicons name="logo-linkedin" size={16} color="#000" /> {item.linkedin}</Text>
        <Text style={styles.email}><Ionicons name="mail" size={16} color="#000" /> {item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/umbc_logo.png')} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Ionicons name="home" size={24} color="white" style={styles.icon} onPress={handleHome} />
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

      <View style={styles.content}>
        <Text style={styles.title}>User Profiles</Text>
        <FlatList
          data={userProfiles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
  footer: {
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  userProfile: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileHeader: {
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    marginBottom: 5,
  },
  linkedin: {
    fontSize: 14,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default UserProfilePage;
