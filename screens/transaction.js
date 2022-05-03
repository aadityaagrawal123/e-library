import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends Component() {
render (){
  return (
    <View style={styles.container}>
      <Text style={styles.transText}> You are in the Transaction screen</Text>
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
  transText:{
      color: '#1010ff',
      fontSize: 25,
  }
});
