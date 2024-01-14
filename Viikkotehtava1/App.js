import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  const calculate = () => {
    const lowerResult = Math.round(((220-age) * 0.65));
    const upperResult = Math.round(((220-age) * 0.85));
    setLower(lowerResult);
    setUpper(upperResult);
  }



  return (
    <View style = {styles.container}>
      <Text style ={styles.field}>Age</Text>
      <TextInput 
        keyboardType='decimal-pad' 
        value = {age}
        onChangeText={text => setAge(text)}
        />
      <Text style ={styles.field}>Hr limits</Text>
      <Text style ={styles.field}>{lower} - {upper}</Text>
      <Button onPress={calculate} title = "Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 8,
  },
  field: {
    marginBottom: 4
  }
});
