import { StatusBar } from 'expo-status-bar';
// 🚨 Required : Navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet,  View } from 'react-native';
import { LaunchScreen, SignupScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LaunchScreen"
            component={LaunchScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              headerStyle: {
                backgroundColor: '#FFBD59',
              },
              headerTitleStyle: {
                color: '#fff',
              },
              headerTintColor: "#fff",
              title: "Sign up"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31356E',
  },
});
