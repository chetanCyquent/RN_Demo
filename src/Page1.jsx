// In App.js in a new project

import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Page1Screen({ route }) {
  const navigation = useNavigation();
  const { s1, s2 } = route.params;
  useEffect(() => {
    console.log('value1: ' + s1, 'value2: ' + s2);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page-1</Text>
      <Button title="Open Page-2" onPress={() => navigation.push('Page2')} />
      <Button title="Replace With Page-2" onPress={() => navigation.replace('Page2')} />
      <Text>WelCome To PAGE1</Text>
      <Text>{s1}</Text>
      <Text>{s2}</Text>
    </View>
  );
}

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Home: HomeScreen,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);
