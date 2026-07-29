import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function App() {
  return (
    <View>


      <Image source={require('./images/norbit.jpeg')}/>
      <image style={styles.mainImage}/>
    
  <Text style={styles.welcomeText}>welcome to my app</Text>

      <Text>welcome to my app</Text>
      <Text>enter your name </Text>
      <TextInput placeholder="firstName"/>
      <Text>Enter your surname</Text>
      <TextInput placeholder="surname"/>
      <Button title="Add user"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 45,
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
enterTxt:{
  fontWeight:'bold'
},

userInputText: {
  borderBottomWidth: 1
},

mainImage: {
  height: 250,
  width: 200,
  paddingTop: 25,
  alignItems: 'center'
}






});
