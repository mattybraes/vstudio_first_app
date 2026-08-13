import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated, ViewStyle, StyleProp, ImageSourcePropType} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { RadioButton } from 'react-native-paper';


 type RootStackParamList = {
   Home: undefined;
   ViewDetails: {
    NameSend: string;
    SurnameSend: string; 
  };
 };
  

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainScreenProps = NativeStackScreenProps<
RootStackParamList,
'Home'
>;

type ViewDetailsProps = NativeStackScreenProps<
RootStackParamList,
'ViewDetails'
>;

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="ViewDetails" component={ViewDetails}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
  
};

// MainScreen Function

function MainScreen({navigation}: MainScreenProps) {

  <Button title="Add User"                              
          onPress={() => {
            if((isEmpty(Name)==false) || (isEmpty(Surname)==false)){
            navigation.navigate('ViewDetails', {
              NameSend: Name,
              SurnameSend: Surname
            });
            setError("")
          } else {
             setError("Please fill in all fields")
          }
          }}
        />

  const [Name, setName] = useState('');                
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState('');

  console.log("App is running");
  
  return (
  <View>                    
    <SafeAreaView>
     <ScrollView>

  
    
      <Image style={styles.mainImage} 
      source={require('./_images/zamalek.jpg')}/>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>

     
    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your name:</Text>
      <TextInput style={styles.InputText} 
                        placeholder="John" 
                        autoCapitalize="words" 
                        autoComplete="name" 
                        keyboardType="default"
                        onChangeText={newText => setName(newText)}/>
    </View>  
  
    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your surname:</Text>
      <TextInput style={styles.InputText} 
                 placeholder="Doe" 
                 autoCapitalize="words" 
                 autoComplete="name-family" 
                 keyboardType="default"
                 onChangeText={newText => setSurname(newText)}/>
    </View>
    


      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function isEmpty(value : any){
  return(
    (value == null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length ===0)
  )

}

function ViewDetails( {navigation, route}: ViewDetailsProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const [selectedValue, setSelectValue] = useState('0')
  const [ImageBlock, setImage] = useState<ImageSourcePropType | undefined>(undefined);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style ={{ flex:0, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Hello {NameGet} {SurnameGet}</Text>
      <Text>Please select a language:</Text>
      </View>

      <View style={styles.radioContainer}>
        <View style={styles.radioGroup}>
          <View style={styles.RadioButton}>
            <RadioButton.Android
            value = "1"
            status={selectedValue == "1" ? 'checked' : 'unchecked'}

            onPress={() => setSelectValue('1')}
            color="#0c2064"
            />
            <Text style={styles.radioLabel}>React Natice</Text>


          
          </View>
          <View style={styles.RadioButton}>
            <RadioButton.Android
            value = "1"
            status={selectedValue == "2" ? 'checked' : 'unchecked'}

            onPress={() => setSelectValue('2')}
            color="#0c2064"
            />
            <Text style={styles.radioLabel}>Kotlin</Text>


          
          </View>
          <View style={styles.RadioButton}>
            <RadioButton.Android
            value = "3"
            status={selectedValue == "3" ? 'checked' : 'unchecked'}

            onPress={() => setSelectValue('3')}
            color="#0c2064"
            />
            <Text style={styles.radioLabel}>CSS and HTML</Text>


          
          </View>

          <View style={{flex:1 }}>
            <Text style={{fontWeight: "bold", flex: 0, paddingTop: 30,
              justifyContent: 'center', textAlign: 'center', alignItems: 'center'
            }}>
              Your chosen lanuage:
              </Text>
              <Button title="Click here"
              onPress={() => {
                switch(selectedValue){
                  case "1"
                 setImage(require('./_images/kotlin.png'));
                 break;

                 case "2"
                 setImage(require('./_images/vscode_picture.png'));
                 break;

                 case "3"
                  setImage(require('./_images/reactnative_pic.png'));
                  break;
                  default:
                    setImage(undefined);



                }


              }}
              />

              


          </View>
        </View>
      </View>
    </View>
  );
};

interface FadeInViewProps{
  children: ReactNode;
  style?: StyleProp<ViewStyle>
}




const FaidInView = ({ children, style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false
      }
    ).start();
  },[fadeAnim])

  return (
    <Animated.View style ={{
      ...(style as object),
      opacity: fadeAnim
    }}>
      {children}
    </Animated.View>

  
  );
}


const styles = StyleSheet.create({
  welcomeText: {
   paddingTop: 70,
   color: 'purple',
   fontWeight: 'bold',
   fontSize: 50,
   textAlign: 'center'
  },

labelText: {
  fontWeight: 'bold',
},

InputText:{
  borderBottomWidth: 1,

},

mainImage: {
  height: 350,
  width: 400,
  paddingTop: 60,
  justifyContent: 'center',
  alignItems: 'center',
},

inputFlex: {
  flexDirection: 'row',
  marginTop: 25,
  justifyContent: 'space-evenly', 
},

errorRed: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 30,
  textAlign: 'center'
},

radioContainer: {
 flex: 0,
 backgroundColor:'#529FCB',
 justifyContent: 'center',
 alignItems: 'center'
},

RadioButton: {
  flexDirection: 'row',
  alignItems: 'center',
},

radioLabel: {
  marginLeft: 5,
  fontSize: 15,
  color: 'black'
},

radioGroup: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: 20,
  borderRadius: 6,
  backgroundColor: '#ADD1E6',
  padding: 15,
  elevation: 5,
  shadowColor: '#19394e',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3
}
});
