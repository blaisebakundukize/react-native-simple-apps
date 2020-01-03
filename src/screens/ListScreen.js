import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 24 },
    { name: 'Friend #5', age: 26 },
    { name: 'Friend #6', age: 27 },
    { name: 'Friend #7', age: 28 },
    { name: 'Friend #8', age: 29 },
    { name: 'Friend #9', age: 22 }
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
