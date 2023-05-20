import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { HomeScreen, LaunchScreen, LoginScreen, SignupScreen, UserScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './lib';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser(null);
      }
    });
  }, []);

  const optionsScreens = {
    contentStyle: {
      backgroundColor: '#8b5cf6',
    },
    headerTintColor: '#8b5cf6',
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator screenOptions={optionsScreens}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: 'Home',
              }}
            />

            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{
                title: 'User Profile',
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={optionsScreens}>
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{ title: 'Sign up' }}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
          </Stack.Navigator>
        )}
      </NavigationContainer>

      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
