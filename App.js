import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import Information from './Information';
import Radiobutton from './Radiobutton';
import React, {useState} from 'react';
import StyleSheet from './Styles';

export default function App() {
  const [gender, setGender] = useState('No gender selection');

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
        {}
      <Text style={StyleSheet.header}>Alcometer</Text>

        <Information options={options} onPress={(value) => 
          {setGender(value)}} style={{backgroundColor: 'red'}} />
          <Text>{gender}</Text>
    </View>
    
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  button: {
    marginBottom: 50,
  },
  header: {
    margin: 20,
    fontSize: 30,
  },
});
*/