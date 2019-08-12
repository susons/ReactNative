import React, { Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';

export default class TipCalculator extends Component {

  render() {
    const { updateCustomTip, tip, inputValue, handleInput, handleButtonPress } = this.props;
    return (
      <>
        <TextInput
          style={styles.input}
          value={inputValue}
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={text => handleInput(text)}
          underlineColorAndroid='white'
          placeholderTextColor='white'
        />
        <View style={styles.buttonGroupObject}>
          <Button
            style={styles.button}
            title='10%'
            onPress={() => handleButtonPress(0.1)}
          />
          <Button
            style={styles.button}
            title='20%'
            onPress={() => handleButtonPress(0.2)}
          />
          <Button
            style={styles.button}
            title='25%'
            onPress={() => handleButtonPress(0.25)}
          />
          <TextInput
            value={(tip * 100).toString()}
            keyboardType="numeric"
            placeholder="0.00"
            style={styles.customInput}
            onChangeText={text => updateCustomTip(text)}
            underlineColorAndroid='white'
            placeholderTextColor='white'
            />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    height: 100,
    width: '100%',
    padding: 5,
    color: '#fff',
  },
  customInput: {
    height: 40,
    width: 60,
    padding: 5,
    color: '#fff',
  },
  buttonGroupObject: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});