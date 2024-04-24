import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MessagesPage = ({ route }) => {
  const [inboxMessages, setInboxMessages] = useState([
    { id: '1', sender: 'Prof. Abdul', date: '2024-04-21', message: 'Hello, how are you?' },
    { id: '2', sender: 'Avi', date: '2024-04-19', message: 'Are you available?' },
  ]);

  const [outboxMessages, setOutboxMessages] = useState([
    { id: '1', receiver: 'Prof. Abdul', date: '2024-04-21', message: 'Did you receive my application?' },
    { id: '2', receiver: 'Avi', date: '2024-04-19', message: 'Hello Professor I am looking forward to work on this project' },
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

  const [activeTab, setActiveTab] = useState('Inbox');
 const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.sender}>{item.sender || item.receiver}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const messagesToShow = activeTab === 'Inbox' ? inboxMessages : outboxMessages;

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

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, activeTab === 'Inbox' ? styles.activeTab : null]} onPress={() => handleTabPress('Inbox')}>
          <Text style={styles.tabText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'Outbox' ? styles.activeTab : null]} onPress={() => handleTabPress('Outbox')}>
          <Text style={styles.tabText}>Outbox</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messagesContainer}>
        <FlatList
          data={messagesToShow}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    padding: 10,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  activeTab: {
    backgroundColor: '#0066ff',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#666',
    marginBottom: 5,
  },
  message: {},
  footer: {
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
  },

    headerText: {
      color: '#fff',
      fontSize: 18,
    },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MessagesPage;
