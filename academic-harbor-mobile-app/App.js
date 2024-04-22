import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './SignIn'
import AcademicHarborPage from './AcademicHarbor'
import ProjectsPage from './Projects'
import RepositoryPage from './Repository'
import Inbox from './Inbox'
import Notification from './Notification'
import UserProfilePage from './UserProfile'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AcademicHarbor" component={AcademicHarborPage} /> 
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="UserProfilePage" component={UserProfilePage} />
        <Stack.Screen name="Projects" component={ProjectsPage} />
        <Stack.Screen name="Repository" component={RepositoryPage} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
