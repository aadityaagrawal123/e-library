import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends Component() {
render (){
  return (
    <View style={styles.container}>
      <Text style={styles.searchText}> You are in the Search screen</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText:{
      color: '#1010ff',
      fontSize: 25,
  }
});
