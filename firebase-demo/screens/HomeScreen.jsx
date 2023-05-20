import { signOut } from 'firebase/auth';
import { Avatar, Button, Center, Pressable, Stack } from 'native-base';
import { auth } from '../lib';

export default function HomeScreen({ navigation }) {
  const signoutHandler = function () {
    signOut(auth);
  };

  return (
    <Center flex={1}>
      <Stack position={'absolute'} right={5} top={10}>
        <Pressable onPress={() => navigation.navigate('UserScreen')}>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
        </Pressable>
      </Stack>
      <Button onPress={signoutHandler} colorScheme={'danger'} size={'lg'}>
        Sign Out
      </Button>
    </Center>
  );
}
