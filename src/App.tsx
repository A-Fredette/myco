import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen.tsx'
import HomeScreen from './screens/HomeScreen.tsx'

export type RootStackParamList = {
  Login: undefined
  Home: undefined
  // Define other screens and their params here
}

const Stack = createStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
