// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Page2Screen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page-2</Text>
      <Text>WelCome To PAGE2</Text>
      <Button title="BAck TO HOME" onPress={() => navigation.popToTop('Home')} />
    </View>
  );
}

/*export default function Page2Screen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page-2</Text>
      <Text>WelCome To PAGE2</Text>
      <Button title="POP TO HOME" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Home: HomeScreen,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);*/
