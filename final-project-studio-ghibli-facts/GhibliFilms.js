import React, {useEffect, useState} from 'react';
import { Text, 
SafeAreaView, 
FlatList, 
StyleSheet, 
ActivityIndicator, 
ScrollView,
TextInput
} from 'react-native';
import style from './StyleSheet';

import filter from 'lodash.filter';

import axios from 'axios';


export default function GhibliFilms() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        console.log('API Response:', response.data);
          setFilms(response.data);
      } catch (error){
        console.error('Error fetching films data', error);
        setError('Failed to load films');
      } finally {

        setLoading(false);
      }
    };

    
    fetchFilms();
  }, []);
    
  
  if (loading) {
    return (
      <SafeAreaView style={style.center}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading Films...</Text>
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
      
      
    
    return(
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
          <Text style={style.header}>Studio Ghibli Films</Text>
          <FlatList
            data={films}
            keyExtractor={(item) => item.id}
            renderItem={({ item}) =>(
              <SafeAreaView style={style.item}>
                <Text style={style.name}>{item.title}</Text>
              </SafeAreaView>
            )}
          />
        </ScrollView>  
        </SafeAreaView>
        );
      </SafeAreaView>

    );
  
}


