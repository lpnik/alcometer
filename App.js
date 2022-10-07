import { Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import StyleSheet from './Styles';
import { useFonts } from 'expo-font';
import Information from './Information';

export default function App() {
  const [gender, setGender] = useState('No gender selection');

  const [loaded] = useFonts({
    AbelRegular: require('./assets/fonts/Abel-Regular.ttf')
  });

  if(!loaded) {
    return null
  }


  const options = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ]

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        {}
      <Text style={StyleSheet.header}>Alcometer</Text>
        <Information options={options} onPress={(value) => 
          {setGender(value)}} 
          />
      </ScrollView>
    </View>
    
  );
}


/*
style={{backgroundColor: 'white'}} 
*/