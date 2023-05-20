//rnfs
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CustomButton } from '../components';

export default function LaunchScreen({ navigation }) {
  console.log(navigation);
  return (
    <ImageBackground
      source={require('../assets/images/launch.png')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome to FlickFun
        </Text>

        {/* Group Button */}
        <View style={styles.groupButtons}>
          <CustomButton
            onPress={() =>
              navigation.navigate('LoginScreen')
            }
            label="Login"
          />
          <View style={styles.divider} />
          <CustomButton
            outline
            onPress={() =>
              navigation.navigate('SignupScreen')
            }
            label="Sign up"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
  },
  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },
  divider: {
    marginHorizontal: 10,
  },
});
