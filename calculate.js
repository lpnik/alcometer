
import { StyleSheet, Text, View, Button } from 'react-native';
import Information from './Information';
import Radiobutton from './Radiobutton';
import React, {useState} from 'react';

export default function Calculate(options, bottlesValue, timeValue) {
    cont [joku, setJoku] = useState;

    const calculate = () => {
        let result = 0

        burning = weight / 10;
        grams = bottles * 8 * 4.5;

        if(gender === 'male') {
            result = grams/(weight * 0,7)
        } else {
            result = grams/(weight * 0,6)
        }
        set
    }

  return (
    <View style={StyleSheet.container}>
    <Text style={StyleSheet.header}>Alcometer</Text>
      <Information />
      <Radiobutton options={options} onPress={(value) => 
        {setTest(value)}} style={{backgroundColor: 'red'}} />
      <Button style={StyleSheet.button} title="Calculate"></Button>
    </View>
    
  );
}
