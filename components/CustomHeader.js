import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Appbar, Menu, withTheme } from 'react-native-paper'
import { goBack } from '../lib/navigation'

export default withTheme(class extends Component {
  state = {
    menuOpen: false
  }

  render() {
    const { state } = this.props.navigation
    const { options } = this.props.scene.descriptor

    return (
      <Appbar.Header style={{
        elevation: options.hasAddon ? 0 : 4,
        backgroundColor: this.props.theme.colors.appBar
      }}>
        {state.routes.length > 1
          && <Appbar.BackAction onPress={this.goBack} />}
        <Appbar.Content title={options.title || 'Repl.it'} />
        
        {options.menu && <Menu
          visible={this.state.menuOpen}
          onDismiss={this.closeMenu}
          anchor={
            <Appbar.Action
              onPress={this.openMenu}
              icon={Platform.OS === 'android' ? 'more-vert' : 'more-horiz'}
              color='#ffffff'
            />
          }
        >
          {options.menu(this.closeMenu)}
        </Menu>}
      </Appbar.Header>
    )
  }

  goBack = () => goBack(this.props.navigation)
  openMenu = () => this.setState({ menuOpen: true })
  closeMenu = () => this.setState({ menuOpen: false })
})