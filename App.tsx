import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/view/Login/Login';
import { ProductScreen } from './src/view/Products/Product';

const Stack = createNativeStackNavigator();

const  App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='ProductList'  component={ProductScreen} options={{title: 'Lista de productos'}} />
        <Stack.Screen name='LoginScreen'  component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;