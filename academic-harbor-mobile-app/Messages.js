import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessagesPage = () => {
  const [inboxMessages, setInboxMessages] = useState([
    { id: '1', sender: 'Prof. Abdul', date: '2024-04-21', message: 'Hello, how are you?' },
    { id: '2', sender: 'Avi', date: '2024-04-19', message: 'Are you available?' },
  ]);

  const [outboxMessages, setOutboxMessages] = useState([
    { id: '1', receiver: 'Prof. Abdul', date: '2024-04-21', message: 'Hello, how are you?' },
    { id: '2', receiver: 'Avi', date: '2024-04-19', message: 'Are you available?' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.sender}>{item.sender || item.receiver}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./images/umbc_logo.png')} style={styles.logo} />
        <Ionicons name="menu" size={24} color="white" style={styles.icon} />
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.inbox]}>
          <Text style={styles.tabText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.outbox]}>
          <Text style={styles.tabText}>Outbox</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messagesContainer}>
        <Text style={styles.title}>Inbox</Text>
        <FlatList
          data={inboxMessages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Text style={styles.title}>Outbox</Text>
        <FlatList
          data={outboxMessages}
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
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inbox: {
    backgroundColor: '#00cc00',
  },
  outbox: {
    backgroundColor: '#0066ff',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MessagesPage;
