import { StyleSheet, Text, View } from 'react-native';

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.yellow}></View>
      <View style={styles.orange}></View>
      <View style={styles.purple}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: 'blue',
  },
  yellow: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  orange: {
    flex: 2,
    backgroundColor: 'orange',
  }, purple: {
    flex: 1,
    backgroundColor: 'purple',
  },
});
