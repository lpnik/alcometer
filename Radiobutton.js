import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import StyleSheet from './Styles';


export default function Radiobutton ({options, onPress, style}) {

    const [value, setValue] = useState(null);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <View style={StyleSheet.container}>
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
        </View>
    )
}
