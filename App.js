import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Home from './screens/Home';
import AddExpense from './screens/AddExpense';

const Tab = createBottomTabNavigator();

export default function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarStyle: { paddingBottom: 5, height: 60 },
        }}
      >
        <Tab.Screen 
          name="Home"
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24 }}>🏠</Text>
            ),
          }}
        >
          {(props) => <Home {...props} expenses={expenses} setExpenses={setExpenses} />}
        </Tab.Screen>
        <Tab.Screen 
          name="AddExpense"
          options={{
            tabBarLabel: 'Ajouter',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24 }}>➕</Text>
            ),
          }}
        >
          {(props) => <AddExpense {...props} expenses={expenses} setExpenses={setExpenses} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}