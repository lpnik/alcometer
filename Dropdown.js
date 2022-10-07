import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import StyleSheet from './Styles';


export default function Dropdown ({bottlesList, timeList, onValueChangeBottle, onValueChangeTime}) {
    const [bottlesValue, setBottlesValue] = useState(0);
    const [timeValue, setTimeValue] = useState(0);

    function handleValueChangeBottle(selected) {
        setBottlesValue(selected);
        onValueChangeBottle(selected);
    }


return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Bottles</Text>
      <Picker
        style={StyleSheet.picker}
        mode="dropdown"
        selectedValue={''}>
          {
            bottlesList.map((bottlesnumber, index) => {
                <View key = {bottlesnumber.value}>
                    <View onValueChangeBottle={() => handleValueChangeBottle(bottlesnumber.value)}>
                        {bottlesValue === bottlesnumber.value}
                    </View>
                </View>
              return (<Picker.Item key={index} label={bottlesnumber.label} value={bottlesnumber.value} />)
            })
          }    
      </Picker>
      <Text style={StyleSheet.title}>Time</Text>

    </View>
  );

}
/*
      <Picker
        style={StyleSheet.picker}
        mode="dropdown"
        selectedValue={time}
        onValueChangeTime={(timeValue) => 
        setTime(timeValue)} >
          {
            timeList.map((time, index) => {
              return (<Picker.Item key={index} label={time.label} value={time.value} />)
            })
          }    
      </Picker>
*/