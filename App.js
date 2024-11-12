import React from 'react';
import {FlatList, View, Text, ScrollView} from 'react-native';
import UserCard from './UserCard'
import data from './data'

const App = () => (
  <FlatList 
  data = {data}
  renderItem = {({item})=>(
    <UserCard user = {item} />
  )}
  keyExtractor={(item) => item.id}
  />
);

export default App;
