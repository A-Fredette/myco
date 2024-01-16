import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from './types/HomeScreenTypes.tsx'

type Props = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mushroom Cultivation App</Text>
      <Button
        title="Go to Grow Log"
        onPress={() => navigation.navigate('GrowLog')}
      />
      <Button
        title="Browse Recipes"
        onPress={() => navigation.navigate('Recipes')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  }
})

export default HomeScreen
