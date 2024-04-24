// Import the necessary modules and components
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Repository = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // Added missing state
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
 const handleSignIn = () => {
     navigation.navigate('SignIn');
  };
    const handleSignUp = () => {
       navigation.navigate('SignUpPage');
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


  // Function to toggle the visibility of the form
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Function to close the form
  const closeForm = () => {
    setIsFormVisible(false);
  };

  // Dummy data for projects
  const dummyProjects = [
    {
      projectId: "1",
      projectTitle: "Project 1",
      projectCoordinator: "Coordinator 1",
      teamId: [{ userName: "User 1", email: "user1@example.com" }],
    },
    {
      projectId: "2",
      projectTitle: "Project 2",
      projectCoordinator: "Coordinator 2",
      teamId: [{ userName: "User 2", email: "user2@example.com" }],
    },
  ];

  // Fetch project data from the API
  useEffect(() => {
    // Set projects with dummy data for now
    setProjects(dummyProjects);
  }, []);

  // Function to toggle filter dropdown visibility
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  // Function to handle search input change
  const handleSearchInputChange = (text) => {
    setSearchTerm(text);
  };

  // Function to clear the search term
  const clearFilter = () => {
    setSearchTerm("");
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  

  // Return JSX
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./images/umbc_logo.png")} style={styles.logo} />
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
        <Text style={styles.title}>Repository</Text>
        <Text style={styles.subtitle}>
          Unlock the Gateway to Knowledge: explore, Expand, and Excel with Our
          Project Repository!
        </Text>
        <TouchableOpacity
          style={styles.addProjectButton}
          onPress={toggleFormVisibility}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addProjectButtonText}>Add a new project</Text>
        </TouchableOpacity>
        {isFormVisible && (
            <View style={[styles.popup, styles.formContainer]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.popupContent}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleFormVisibility}
                >
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.formTitle}>Add a New Project</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Project Title"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  placeholder="Project Description"
                  multiline
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Start Date"
                  keyboardType="numeric"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="End Date"
                  keyboardType="numeric"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Project Coordinator"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Team Name"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Project Department"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Concentration"
                  // onChangeText={...}
                  // value={...}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Project Status"
                  // onChangeText={...}
                  // value={...}
                />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>Add Project</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

        )}
      </View>
      <View style={styles.filterDropdown}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={toggleFilterDropdown}
        >
          <Ionicons name="filter" size={24} color="white" />
          <Text style={styles.filterButtonText}>Filter projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={clearFilter}>
          <Text style={styles.clearButtonText}>Clear Filter</Text>
        </TouchableOpacity>
        {showFilterDropdown && (
          <View style={styles.dropdownContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Filter projects..."
              value={searchTerm}
              onChangeText={handleSearchInputChange}
            />
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; 2024 AcademicHarbor. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Repository;
