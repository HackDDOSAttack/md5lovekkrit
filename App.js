import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [line, setNum1] = useState("");

  function Clear() {
    setNum1("");
  }

  function md5() {

    if(line == ""){
      alert("Пустое поле!");
    } else {
      var md5 = require('md5');
      setNum1(md5(line));     
    }
    }
  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={setNum1} value={line}/>
        <Text>{'\t'}</Text>
      </View>
      <View style={styles.container}>
        <Button title="Подсчёт хеша ( md5 ) " onPress={md5}/>
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    width: "85%",
    padding: 10,
    margin: 30,
  },
});
