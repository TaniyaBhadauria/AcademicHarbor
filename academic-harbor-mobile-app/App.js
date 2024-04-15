import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './SignIn'
import AcademicHarborPage from './AcademicHarbor'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen name="AcademicHarbor" component={AcademicHarborPage} /> 
        <Stack.Screen name="SignIn" component={SignInPage} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
