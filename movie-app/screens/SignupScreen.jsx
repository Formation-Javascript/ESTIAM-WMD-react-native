import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { CustomButton } from '../components';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] =
    useState('');

  const onChangeHandler = function (textEntered, keyInput) {
    switch (keyInput) {
      case 'email':
        setEmail(textEntered);
        break;

      case 'password':
        setPassword(textEntered);
        break;

      case 'passwordConfirm':
        setPasswordConfirm(textEntered);
        break;

      default:
        return false;
    }
  };

  const signupHandler =  function () {
    if (email && password === passwordConfirm) {
      const user =  createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(user);
    }
  };

  console.log(email);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(textEntered) =>
          onChangeHandler(textEntered, 'email')
        }
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(textEntered) =>
          onChangeHandler(textEntered, 'password')
        }
      />
      <TextInput
        style={styles.input}
        value={passwordConfirm}
        placeholder="Repeat your password"
        secureTextEntry
        onChangeText={(textEntered) =>
          onChangeHandler(textEntered, 'passwordConfirm')
        }
      />

      <CustomButton
        onPress={signupHandler}
        label="Sign up"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '70%',
    marginBottom: 10,
    padding: 8,
  },
});
