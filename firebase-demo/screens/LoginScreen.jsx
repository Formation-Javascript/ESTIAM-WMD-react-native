import { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AlertDialog, Button, Icon, Input, Stack, Text } from 'native-base';
import { COLORS } from '../constants';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib';
import { notification } from '../utils';

export default function LoginScreen({ navigation }) {
  const [value, setValue] = useState({ email: '', password: '' });
  const [visibility, setVisibility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cancelRef = useRef(null);

  const onChangeHandler = function (textEntered, key) {
    const valueCopy = { ...value };
    valueCopy[key] = textEntered;

    setValue(valueCopy);
  };

  const visibilityHandler = () => setVisibility(!visibility);

  const loginHandler = async function () {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, value.email, value.password);
      notification({ type: 'success', message: 'Welcome back 😊' });
      return userCredential.user;
    } catch (error) {
      return notification({ type: 'danger', message: error.message });
    }
  };

  const onClose = () => setIsOpen(!isOpen);

  const recoveryPassword = async function () {
    sendPasswordResetEmail(auth, value.email)
      .then(() => {
        notification({ type: 'success', message: 'An email to reset your password has been sent' });
        onClose();
      })
      .catch((error) => {
        return notification({ type: 'danger', message: error.message });
      });
  };

  const checkValue = Boolean(value.email && value.password);

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
            onPress={visibilityHandler}
            as={<MaterialIcons name={visibility ? 'visibility' : 'visibility-off'} />}
            color={COLORS.white}
            size="md"
            mr="2"
          />
        }
        type={visibility ? 'text' : 'password'}
        autoCapitalize={'none'}
        color={COLORS.white}
        onChangeText={(textEntered) => onChangeHandler(textEntered, 'password')}
        value={value.password}
      />
      <Text onPress={onClose} fontSize={'xs'} color={COLORS.secondary} fontWeight={'bold'}>
        Forget password
      </Text>

      <Button onPress={loginHandler} mt="4" bgColor={COLORS.secondary} isDisabled={!checkValue}>
        Login
      </Button>

      <Text color={COLORS.white}>
        Don't have an account ?{' '}
        <Text
          onPress={() => navigation.navigate('SignupScreen')}
          color={COLORS.secondary}
          fontWeight={'extrabold'}>
          Register for free
        </Text>
      </Text>

      {/* Modal */}
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Recovery Password</AlertDialog.Header>
          <AlertDialog.Body>
            An email to reset your password has been sent. Please check your inbox and follow the
            instructions to proceed with the password reset process.
            <Input
              mt="6"
              placeholder="Enter your email"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" />}
                  color={COLORS.secondary}
                  size="md"
                  ml="2"
                />
              }
              keyboardType="email-address"
              onChangeText={(textEntered) => onChangeHandler(textEntered, 'email')}
              value={value.email}
            />
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={recoveryPassword}>
                Recovery
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Stack>
  );
}
