import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class TextHandling extends React.Component {
  render() {
    return (
      <View style= {[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color='#0000ff'/>
        <ActivityIndicator size='small' color='#00ff00'/>
      </View>
    )
  }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  }
})

