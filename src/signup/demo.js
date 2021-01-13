import React, {useState} from 'react';
import {Slider, Text, StyleSheet, View, TextInput} from 'react-native';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text> Demo Form </Text>
      <View>
        <TextInput placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Text>
          Rate your teams performance this quarter
        </Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
        <Text>
          Slide value: {value}%
        </Text>
      </View>
    </View>
  );
};

export default App;