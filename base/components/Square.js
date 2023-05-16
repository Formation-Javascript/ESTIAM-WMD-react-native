import { StyleSheet, Text, View } from 'react-native';

export default function Square(props) {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{props.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    /*
    Only for IOS device
    textDecorationStyle: 'double',
    textDecorationColor: 'red',
    textDecorationLine: "underline"
    */

    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    //    textAlign: "center"
  },
});
