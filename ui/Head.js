import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
} from 'native-base'

const Head = () => (
  <View style={styles.header}>
    <Header>
      <Left/>
        <Body>
          <Text style={styles.title}>Header</Text>
        </Body>
      <Right />
    </Header>
  </View>
);

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      }
    })
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    textTransform: 'uppercase',
  }
});

export default Head;