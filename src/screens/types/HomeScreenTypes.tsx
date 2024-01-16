import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
  Login: undefined
  Home: undefined
  GrowLog: undefined
  Recipes: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>

export type HomeScreenProps = RouteProp<RootStackParamList, 'Login'>
