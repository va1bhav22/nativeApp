import {View, Text, Button} from 'react-native';
import React from 'react';
import {FirstComponent, SecondComponents} from './src/components';

const App = () => {
  return (
    <View style={{display: 'flex'}}>
      <Text style={{color: 'red', fontSize: 50}}>vaibhav jadhav </Text>
      <Text style={{color: 'red', fontSize: 50}}>vaibhav jadhav </Text>
      <Text style={{color: 'red', fontSize: 50}}>vaibhav jadhav </Text>
      <Text style={{color: 'red', fontSize: 50}}>vaibhav jadhav </Text>
      <Button title="click me" color="red" />
      <FirstComponent />
      <SecondComponents />
    </View>
  );
};

export default App;
