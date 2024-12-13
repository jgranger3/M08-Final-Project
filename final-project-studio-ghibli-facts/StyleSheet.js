import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 5,
    padding: 5,
    textAlign: 'center',
    color: 'black',
  },
  name:{
    margin: 5,
    padding: 5,
    textAlign: 'center',
   
    
  },
  header: {
    margin: 5,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  SearchBox: {paddingHorizontal:20, 
  paddingVertical:10, 
  borderColor:"#ccc", 
  borderWidth:1,
  borderRadius:8, 
  }

});


export default style;

