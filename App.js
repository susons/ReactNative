import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import {
  Container,
  Content,
} from 'native-base'
import Head from './ui/Head';
import TipCalculator from './ui/TipCalculator';
import Values from './ui/Values';

export default class App extends Component {
  state = {
    isReady: false,
    inputValue: "",
    tip: 0.2,
  }

  updateCustomTip = (text) => {
    if (text) {
      this.setState({tip: parseFloat(text)/ 100})
    } else {
      this.setState({tip: 0})
    }
  }

  handleInput = (text) => {
    this.setState({inputValue: text})
  }

  handleButtonPress = (value) => {
    Alert.alert(
      `Changed Tip amount`,
      `Tip amount will be ${value}`,
      [
        {text: 'Sure why not', onPress: () => this.setState({tip: value})},
        {text: 'Nop, keep the original value', onPress: () => console.log('value vas not changed')},
      ],
    );
  }

  render() {
    const { inputValue, tip } = this.state
    return (
      <Container>
        <Head />
        <View style={styles.container}>
          <Content style={{width: '100%'}}>
            <Values tipPercent={tip} bill={inputValue}/>
            <View style={styles.inputs}>
              <TipCalculator handleButtonPress={this.handleButtonPress} handleInput={this.handleInput} tip={tip} inputValue={inputValue} updateCustomTip={this.updateCustomTip} />
            </View>
          </Content>
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      }
    })
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
  customInput: {
    height: 30,
    width: 60,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20,
  }
});