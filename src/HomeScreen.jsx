import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const lstMenu = [
    {
      title: 'Page - 1 ',
      onPress: () => navigation.navigate('Page1', { s1: 'Coming from Home ', s2: 'data to be continue' }),
    },
    { title: 'Page - 2', onPress: () => navigation.navigate('Page2') },
    { title: 'Page - 3', onPress: () => navigation.navigate('Page1') },
  ];

  return (
    <View style={styles.container}>
      {lstMenu.map((items) => {
        return (
          <TouchableOpacity style={styles.rowContainer} activeOpacity={0.6} onPress={items.onPress}>
            <View style={styles.menuRow}>
              <Image source={require('./../assets/btnReserve.png')} style={styles.imgImage} />
              <Text style={styles.lblTitle}>{items.title}</Text>
              <Image source={require('./../assets/imgMore.png')} style={styles.igtg} />
            </View>
          </TouchableOpacity>
        );
      })}

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
  rowContainer: {
    marginVertical: 10,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imgImage: {
    height: 80,
    width: 80,
  },
  lblTitle: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600',
    borderWidth: 1,
    width: 190,
    marginLeft: 5,
    textAlign: 'center',
  },
  igtg: {
    height: 30,
    width: 30,
  },
});
