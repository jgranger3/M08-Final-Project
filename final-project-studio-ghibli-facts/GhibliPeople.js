import React, {useEffect, useState} from 'react';
import { Text, 
SafeAreaView, 
FlatList, 
StyleSheet, 
ActivityIndicator, 
ScrollView,
TouchableOpacity,
TextInput 
} from 'react-native';
import style from './StyleSheet';
import filter from 'lodash.filter';
import axios from 'axios';

export default function GhibliPeople() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const FetchPeople = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/people');
        setPeople(response.data);
      } catch (error){
        console.error('Error fetching People data', error);
      } finally {
        setLoading(false);
      }
    };
    FetchPeople();
  }, []);
  if (loading) {
    return (
      <SafeAreaView style={style.center}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading People...</Text>
      </SafeAreaView>
    );
  }
  const handleSearch = (query) =>{
      setSearchQuery(query);
      setFullData(json.results);
      const formattedQuery = query.toLowerCase();
      const filterData = filter(fullData, (user) => {
        return contains(user, formattedQuery);
      });
      setData(filterData);
      
    };
    const contains = ({id}, query) =>{
      const {name} = name;

      if (
        name.includes(query)
      ) {
        return true;  
      }
      return false;
    };
    
  return (
      <SafeAreaView style={{flex:1, marginHorizontal:20,}}>
        <TextInput placeholder='Search' 
        clearButtonMode='always' 
        style={style.SearchBox}
        autoCapitalize='none'
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
        />
        <SafeAreaView style={style.container}>
        <ScrollView>
          <Text style={style.header}>Studio Ghibli People</Text>
          <FlatList
            data={people}
            keyExtractor={(item) => item.name}
            renderItem={({ item}) =>(
              <SafeAreaView style={style.item}>
                <Text style={style.name}>{item.name}</Text>
              </SafeAreaView>
            )}
          />
        </ScrollView>  
        </SafeAreaView>
      </SafeAreaView>
  );
}

