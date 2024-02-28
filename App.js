import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const [bmi, setBmi] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState ('')

  function calcBmi() {
    let res = (weight/(Math.pow(height, 2)))
    setBmi(res)
    setWeight('')
    setHeight('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Text style={styles.headerText}>Testtömegindex számítás</Text>
      </View>


      <View style={styles.body}>
        <Text style={styles.label}>Súly (kg)</Text>
        <TextInput
          style={styles.input}
          onChangeText={weight => setWeight(weight) }
        />
        <Text style={styles.label}>Magasság (m)</Text>
        <TextInput
          style={styles.input}
          onChangeText={height => setHeight(height) }
        />
        <Pressable onPress={calcBmi} style={styles.button}>
          <Text style={styles.buttonText}>Számít</Text>
        </Pressable>
        <Text style={styles.label}>Testtömegindex</Text>
        <TextInput
          style={styles.input}
          value={bmi}
        />      
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Szinyei Mikes, 2024</Text>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
