// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {Button} from 'react-nation/elemets';

export default function HomeScreen() {
  const navigation = useNavigation();
  const menu = [
    { title: 'page1', onPress: () => {} },
    { title: 'page2', onPress: () => {} },
    { title: 'page3', onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.menuRow}>
        <Image source={require('./../assets/btnReserve.png')} style={styles.imgImage} />
        <Text style={styles.lblTitle}>My Name</Text>
        <Image source={require('./../assets/imgMore.png')} style={styles.igtg} />
      </View>

      <Button
        title="Open Page-1"
        onPress={() => navigation.navigate('Page1', { s1: 'Coming from Home ', s2: 'data to be continue' })}
      />

      <Text>Page1</Text>
      <Text>Page2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20, backgroundColor: 'lightblue' },

  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgImage: {
    height: 80,
    width: 80,
  },
  lblTitle: {
    color: 'red',
  },
  igtg: {
    height: 70,
    width: 70,
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
  },
});
