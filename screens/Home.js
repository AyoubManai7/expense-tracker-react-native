import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function Home({ expenses, setExpenses }) {
  
  const deleteExpense = (id) => {
    Alert.alert(
      "Supprimer",
      "Voulez-vous supprimer cette dépense?",
      [
        { text: "Annuler" },
        {
          text: "Supprimer",
          onPress: () => setExpenses(expenses.filter(item => item.id !== id))
        }
      ]
    );
  };

  const calculateTotal = () => {
    return expenses.reduce((sum, item) => sum + parseFloat(item.amount), 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mes Dépenses</Text>
        <View style={styles.totalBox}>
          <Text style={styles.totalText}>Total: {calculateTotal()} DT</Text>
        </View>
      </View>

      {expenses.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Aucune dépense</Text>
          <Text style={styles.emptySubText}>Ajoutez votre première dépense!</Text>
        </View>
      ) : (
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
              </View>
              <View style={styles.cardRight}>
                <Text style={styles.cardAmount}>{item.amount} DT</Text>
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={() => deleteExpense(item.id)}
                >
                  <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  totalBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  list: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLeft: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  cardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});