import React, {useState, useEffect} from 'react'
import { Text, TextInput, View, Button, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Radiobutton from './Radiobutton';
import StyleSheet from './Styles';

export default function Information({options, onPress, style}) {
    const [weight, setWeight] = useState(0)
    const [bottles, setBottles] = useState()
    const [time, setTime] = useState()
    const [joku, setJoku] = useState(0)
    const [value, setValue] = useState(null);
    const [risk, setRisk] = useState('');

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    const calculate = () => {
      let result = 0
      let litres = 0
      let burning = 0
      let grams = 0
      let gramsLeft = 0
      let color = ('');

        litres = bottles * 0.33;
        console.log(bottles, "bottles ")
        console.log(time, "time")
        console.log(litres, "litres")

        grams = litres * 8 * 4.5;
        console.log(grams, "grams")

        burning = weight / 10;
        console.log(weight, "weight")
        console.log(burning, "burning")

        gramsLeft = grams - burning * time;
        console.log(gramsLeft, "gramsLeft")
        console.log(value, "value")

        if(value === 'male') {
            result = gramsLeft/(weight * 0.7)
        } else {
            result = gramsLeft/(weight * 0.6)
        }
        setJoku(result)
        console.log(result, "result")

        
        if(result <= 0.5) {
          color = "green"
        } else if (result >= 0.5 < 1) {
          color = "yellow"
        } else if (result >= 1) {
          color = "red"
        }

        setRisk(color);
        console.log(color)
    }

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Weight</Text>
      <TextInput style={StyleSheet.info} placeholder="Enter weight"
        value={weight}
        onChangeText={text =>
        setWeight(text)} keyboardType='num-pad' />
      <Text style={StyleSheet.title}>Bottles</Text>
      <Picker
        style={StyleSheet.picker}
        selectedValue={bottles}
        onValueChange={(bottlesValue) => 
        setBottles(bottlesValue)}>
          <Picker.Item label='1' value='1' />
          <Picker.Item label='2' value='2' />
          <Picker.Item label='3' value='3' />
          <Picker.Item label='4' value='4' />
          <Picker.Item label='5' value= '5' />
          <Picker.Item label='6' value= '6' />
          <Picker.Item label='7' value= '7' />
          <Picker.Item label='8' value= '8' />
          <Picker.Item label='9' value= '9' />
          <Picker.Item label='10' value= '10' />
      </Picker>
      <Text style={StyleSheet.title}>Time</Text>
      <Picker
        style={StyleSheet.picker}
        selectedValue={time}
        onValueChange={(timeValue) => 
          setTime(timeValue)}>
          <Picker.Item label='1' value='1' />
          <Picker.Item label='2' value='2' />
          <Picker.Item label='3' value='3' />
          <Picker.Item label='4' value='4' />
          <Picker.Item label='5' valuea='5' />
      </Picker>

      <Text style={StyleSheet.title}>Gender</Text>
        {
        options.map((item) => (
            <View key = {item.value} style={[StyleSheet.buttonContainer, style]}>
                <Text style={StyleSheet.label}> {item.label}</Text>
                <Pressable style={StyleSheet.circle} onPress={() => handlePress(item.value)}>
                    {value === item.value && <View style={StyleSheet.checkedCircle}/>}
                </Pressable>
            </View>
        ))
        }


      <Button style={StyleSheet.button} title="Calculate" onPress={calculate} ></Button>
      <Text>{joku.toFixed(2)}</Text>
      <Text>{risk}</Text>

    </View>
  );
}
/*
    const bottle = [
      {label: '1', value: 0.33},
      {label: '2', value: 0.66},
      {label: '3', value: 0.99},
      {label: '4', value: 1.32},
      {label: '5', value: 1.65},
      {label: '6', value: 1.98},
      {label: '7', value: 2.31},
      {label: '8', value: 2.64},
      {label: '9', value: 2.97},
      {label: '10', value: 3.3},
    ]

    const hours = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
    ]
*/
/*
      <Text>{bottles} bottles</Text>
      <Text>{litres} litres</Text>
      <Text>{grams} grams</Text>
      <Text>{burning} burning</Text>
      <Text>{gramsLeft} gramsLeft</Text>
*/