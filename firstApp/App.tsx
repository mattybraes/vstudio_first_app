import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>welcome to my app</Text>
      <Text>enter your name </Text>
      <TextInput placeholder="firstName"/>
      <Text>Enter your surname</Text>
      <TextInput placeholder="surname"/>
      <Button title="Add user"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c73939',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
