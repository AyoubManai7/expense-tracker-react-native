import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function AddExpense({ expenses, setExpenses, navigation }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer un titre');
      return;
    }
    if (!amount.trim() || isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert('Erreur', 'Veuillez entrer un montant valide');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      title: title.trim(),
      amount: parseFloat(amount).toFixed(2),
      date: new Date().toLocaleDateString('fr-FR'),
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');

    Alert.alert('Succès', 'Dépense ajoutée !', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ajouter une Dépense</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Titre de la dépense</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Café, Transport, Courses..."
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Montant (DT)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 15.50"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});