import * as React from 'react';
import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GhibliFilms from './GhibliFilms';
import GhibliPeople from './GhibliPeople';
import GhibliLocations from './GhibliLocations';


const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text> Welcome To The World Of Studio Ghibli Anime Facts!!!!</Text>
    <Button title="Ghibli Films" onPress={() => navigation.navigate('Films')} />
    <Button title="Ghibli People" onPress={() => navigation.navigate('People')} />
    <Button title="Ghibli Locations" onPress={() => navigation.navigate('Locations')}/>
  </SafeAreaView>

);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Films" component={GhibliFilms} />
        <Stack.Screen name="People" component={GhibliPeople} />
        <Stack.Screen name="Locations" component={GhibliLocations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
