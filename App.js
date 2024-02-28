import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const [bmi, setBmi] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState ('')

  function calcBmi() {
    let res = (weight/(Math.pow(height, 2)))*1
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
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5FA41C',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: '#FF3AC6',
      fontSize: 14,
      textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#FF1A00',
    color:'#009B00',
    height: 30,
    width: '90%',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  header: {
    backgroundColor: '#39FF14',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  headerText: {
    fontSize: 28,
    color:'#964B00'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  label: {
    marginTop: 10,
    fontSize: 22,
    color:'#39FF14'
  },
  footer: {
    backgroundColor: '#964B00',
    width: '100%',
    padding: 5,
  },
  footerText: {
    color: '#FF1A00',
    textAlign: 'center',
  },
});
