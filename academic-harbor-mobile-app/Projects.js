import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProjectsPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showProfessorDropdown, setShowProfessorDropdown] = useState(false);
  const [showConcentrationDropdown, setShowConcentrationDropdown] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [selectedConcentration, setSelectedConcentration] = useState('');
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
 const handleHome = () => {
  navigation.navigate('AcademicHarbor');
}

 const handleNotifications = () => {
  navigation.navigate('Notification');
};
 const handleUserProfilePage = () => {
  navigation.navigate('UserProfilePage');
};

  const departments = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Biology',
    'Chemistry',
    'Engineering',
    'Social Sciences',
    'Humanities',
  ];
  const professors = ['Professor 1', 'Professor 2', 'Professor 3'];
  const concentrations = ['Concentration 1', 'Concentration 2', 'Concentration 3'];

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
    searchBar: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
    },
    filterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    filterDropdown: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginRight: 10,
      position: 'relative',
    },
    filterText: {
      color: '#333',
      fontSize: 16,
    },
    dropdownOverlay: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 2,
      zIndex: 1,
      maxHeight: 200,
      overflow: 'auto',
    },
    dropdownItem: {
      padding: 10,
    },
    dropdownItemText: {
      color: '#333',
      fontSize: 16,
    },
    discoverText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    projectCard: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 5,
      marginBottom: 20,
    },
    projectTitle: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    projectDescription: {
      color: '#000',
      fontSize: 16,
      marginBottom: 10,
    },
    projectInfo: {
      flexDirection: 'row',
      marginTop: 10,
    },
    projectInfoItem: {
      marginRight: 20,
      color: '#000',
      fontSize: 14,
    },
    projectButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    projectButton: {
      backgroundColor: '#000',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 4,
    },
    projectButtonText: {
      color: '#fff',
      fontSize: 14,
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

  const toggleDepartmentDropdown = () => {
    setShowDepartmentDropdown(!showDepartmentDropdown);
  };

  const toggleProfessorDropdown = () => {
    setShowProfessorDropdown(!showProfessorDropdown);
  };

  const toggleConcentrationDropdown = () => {
    setShowConcentrationDropdown(!showConcentrationDropdown);
  };

  const selectDepartment = (department) => {
    setSelectedDepartment(department);
    setShowDepartmentDropdown(false);
  };

  const selectProfessor = (professor) => {
    setSelectedProfessor(professor);
    setShowProfessorDropdown(false);
  };

  const selectConcentration = (concentration) => {
    setSelectedConcentration(concentration);
    setShowConcentrationDropdown(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      setShowDepartmentDropdown(false);
      setShowProfessorDropdown(false);
      setShowConcentrationDropdown(false);
    }}>
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
          <Text style={styles.discoverText}>Discover a world of collaborations!</Text>

          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterDropdown} onPress={toggleDepartmentDropdown}>
              <Text style={styles.filterText}>{selectedDepartment || 'Department'}</Text>
              {showDepartmentDropdown && (
                <View style={styles.dropdownOverlay}>
                  {departments.map((department, index) => (
                    <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => selectDepartment(department)}>
                      <Text style={styles.dropdownItemText}>{department}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterDropdown} onPress={toggleProfessorDropdown}>
              <Text style={styles.filterText}>{selectedProfessor || 'Professor/Student'}</Text>
              {showProfessorDropdown && (
                <View style={styles.dropdownOverlay}>
                  {professors.map((professor, index) => (
                    <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => selectProfessor(professor)}>
                      <Text style={styles.dropdownItemText}>{professor}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterDropdown} onPress={toggleConcentrationDropdown}>
              <Text style={styles.filterText}>{selectedConcentration || 'Concentration'}</Text>
              {showConcentrationDropdown && (
                <View style={styles.dropdownOverlay}>
                  {concentrations.map((concentration, index) => (
                    <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => selectConcentration(concentration)}>
                      <Text style={styles.dropdownItemText}>{concentration}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#333" />
            <TextInput
              style={styles.searchInput}
              placeholder="Browse projects and research papers"
              placeholderTextColor="#333"
            />
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>AI testing</Text>
            <Text style={styles.projectDescription}>
              AI testing involves the evaluation and validation of artificial intelligence systems to ensure their functionality, performance, and reliability.
            </Text>
            <Text style={styles.projectDescription}>
              Projects/Research     Description     Professor     Department {'\n'}
              AI testing             Dec says it is very innovative in NLP     Harji     MPS
            </Text>
            <View style={styles.projectButtons}>
              <TouchableOpacity style={styles.projectButton}>
                <Text style={styles.projectButtonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.projectButton}>
                <Text style={styles.projectButtonText}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.projectButton}>
                <Text style={styles.projectButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>&copy; 2024 AcademicHarbor. All rights reserved.</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProjectsPage;