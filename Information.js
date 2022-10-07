import React, {useState, useEffect} from 'react'
import { Text, TextInput, View, Button, Pressable, Alert } from 'react-native';
import StyleSheet from './Styles';
import Dropdown from './Dropdown';
import {Picker} from '@react-native-picker/picker';


export default function Information({options, style, onPress}) {
    const [weight, setWeight] = useState(0)
    const [joku, setJoku] = useState(0)
    const [value, setValue] = useState(null);
    const [risk, setRisk] = useState('');
    const [bottles, setBottles] = useState(0);
    const [time, setTime] = useState(0);

  
  
    const bottlesList =  [
        {label: '1', value: 1},
        {label: '2', value: 2}, 
        {label: '3', value: 3},
        {label: '4', value: 4},        
        {label: '5', value: 5},
        {label: '6', value: 6},       
        {label: '7', value: 7},
        {label: '8', value: 8},        
        {label: '9', value: 9},
        {label: '10', value: 10}
    ]
  
    const timeList = [
      {label: '1', value: 1},
      {label: '2', value: 2}, 
      {label: '3', value: 3},
      {label: '4', value: 4},        
      {label: '5', value: 5},
    ]

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

        if(weight == 0) {
          Alert.alert('Weight is not typed')
        }

        if(result > 0) {
          setJoku(result)
        }
         else {
          setJoku(0)
         }
        console.log(result, "result")

        if (result > 0) {
          if(result = 0 && result <= 0.5) {
            color = "#73E484"
          } if (result >= 0.5 && result < 1) {
            color = "#FFDD03"
          } if (result >= 1) {
            color = "#F93838"
          }
  
          setRisk(color);
          console.log(color)
        }

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
        mode="dropdown"
        selectedValue={bottles}
        onValueChange={(bottlesValue) => 
        setBottles(bottlesValue)} >
          {
            bottlesList.map((bottles, index) => {
              return (<Picker.Item key={index} label={bottles.label} value={bottles.value} />)
            })
          }    
      </Picker>
      <Text style={StyleSheet.title}>Time</Text>
      <Picker
        style={StyleSheet.picker}
        mode="dropdown"
        selectedValue={time}
        onValueChange={(timeValue) => 
        setTime(timeValue)} >
          {
            timeList.map((time, index) => {
              return (<Picker.Item key={index} label={time.label} value={time.value} />)
            })
          }    
      </Picker>
      <Text style={StyleSheet.title}>Gender</Text>
        {
        options.map((item) => (
            <View style={StyleSheet.gender}>
              <View key = {item.value} style={[StyleSheet.buttonContainer, style]}>
                  <Text style={StyleSheet.label}> {item.label}</Text>
                  <Pressable style={StyleSheet.circle} onPress={() => handlePress(item.value)}>
                      {value === item.value && <View style={StyleSheet.checkedCircle}/>}
                  </Pressable>
              </View>
            </View>
        ))
        }
      <Button color='#844CB6' title="Calculate" onPress={calculate} ></Button>
      <Text style={StyleSheet.risk} >
      <Text style={{color: risk, borderColor: 'black', borderWidth: 1}}>{joku.toFixed(2)}</Text>
      </Text>
      
    </View>
  );
}