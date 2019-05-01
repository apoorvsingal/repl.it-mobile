import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, Text, Button } from 'react-native-paper'
import { resetAndNavigate } from '../lib/navigation'

export default class extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Title style={{
          fontSize: 36,
          padding: 16
        }}>Hello, {this.props.navigation.getParam('username', 'Repl.it user')}!</Title>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          maxWidth: '84%',
          marginBottom: 20
        }}>
          You're all set to get started
        </Text>

        <Button mode='contained' onPress={() => resetAndNavigate(this.props.navigation, 'Home')}>
          Go!
        </Button>
      </View>
    )
  }
}