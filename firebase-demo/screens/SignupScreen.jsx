import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Icon, Input, Stack, Text } from 'native-base';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib';
import { notification } from '../utils';
import { COLORS } from '../constants';

export default function SignupScreen({ navigation }) {
  const [value, setValue] = useState({ email: '', password: '', passwordConfirm: '' });
  const [visibility, setVisibility] = useState({ password: false, passwordConfirm: false });

  // Handle on change input value
  const onChangeHandler = function (textEntered, key) {
    const valueCopy = { ...value };
    valueCopy[key] = textEntered;

    setValue(valueCopy);
  };

  // Handle show and hide password text
  const visibilityHandler = function (key) {
    const visibilityCopy = { ...visibility };
    visibilityCopy[key] = !visibilityCopy[key];

    setVisibility(visibilityCopy);
  };

  const checkValue = Boolean(value.email && value.password && value.passwordConfirm);

  // Sign up an user with Firebase
  const signupHandler = async function () {
    if (value.password !== value.passwordConfirm) {
      // 'Please provide the same password'
      //    return notification({ type: 'error', message: 'Please provide the same password' });
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      notification({ type: 'success', message: 'User account successfully created!' });

      return userCredential.user;
    } catch (error) {
      return notification({ type: 'error', message: error.message });
    }
  };

  return (
    <Stack safeAreaX="6" flex={1} justifyContent={'center'} space={'4'}>
      <Input
        placeholder="Enter your email"
        placeholderTextColor={COLORS.white}
        InputLeftElement={
          <Icon as={<MaterialIcons name="email" />} color={COLORS.white} size="md" ml="2" />
        }
        keyboardType="email-address"
        color={COLORS.white}
        onChangeText={(textEntered) => onChangeHandler(textEntered, 'email')}
        value={value.email}
      />

      <Input
        placeholder="Enter your password"
        placeholderTextColor={COLORS.white}
        InputRightElement={
          <Icon
            onPress={() => visibilityHandler('password')}
            as={<MaterialIcons name={visibility.password ? 'visibility' : 'visibility-off'} />}
            color={COLORS.white}
            size="md"
            mr="2"
          />
        }
        type={visibility.password ? 'text' : 'password'}
        autoCapitalize={'none'}
        color={COLORS.white}
        onChangeText={(textEntered) => onChangeHandler(textEntered, 'password')}
        value={value.password}
      />

      <Input
        placeholder="Repeat your password"
        placeholderTextColor={COLORS.white}
        InputRightElement={
          <Icon
            onPress={() => visibilityHandler('passwordConfirm')}
            as={
              <MaterialIcons name={visibility.passwordConfirm ? 'visibility' : 'visibility-off'} />
            }
            color={COLORS.white}
            size="md"
            mr="2"
          />
        }
        type={visibility.passwordConfirm ? 'text' : 'password'}
        autoCapitalize={'none'}
        color={COLORS.white}
        onChangeText={(textEntered) => onChangeHandler(textEntered, 'passwordConfirm')}
        value={value.passwordConfirm}
      />

      <Button onPress={signupHandler} mt="4" bgColor={COLORS.secondary} isDisabled={!checkValue}>
        Sign up
      </Button>

      <Text color={COLORS.white}>
        Already have an account ?{' '}
        <Text
          onPress={() => navigation.navigate('LoginScreen')}
          color={COLORS.secondary}
          fontWeight={'extrabold'}>
          Login
        </Text>
      </Text>
    </Stack>
  );
}
