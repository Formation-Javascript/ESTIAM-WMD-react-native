import { Button, Heading, Stack, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { COLORS } from '../constants';

export default function LaunchScreen({ navigation }) {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/images/launch.png')}>
      <Stack justifyContent={'space-between'} alignItems={'center'} flex={1} safeArea>
        <Heading textAlign={'center'} color={COLORS.white} size="2xl" mt="4" fontWeight={'extrabold'}>
          Welcome to Parade
        </Heading>

        <Button.Group space={'8'} pb="12">
          <Button
            onPress={() => navigation.navigate('LoginScreen')}
            size={'lg'}
            bgColor={COLORS.secondary}>
            <Text color={COLORS.white} fontWeight={'bold'}>
              Login
            </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('SignupScreen')}
            size={'lg'}
            variant="outline"
            borderColor={COLORS.secondary}>
            <Text color={COLORS.white} fontWeight={'bold'}>
              Sign up
            </Text>
          </Button>
        </Button.Group>
      </Stack>
    </ImageBackground>
  );
}
