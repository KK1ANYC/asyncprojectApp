import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [tickers, setTickers] = useState([
    { id: 1, ticker: "TSLA"},
    { id: 2, ticker: "PLTR"},
    { id: 3, ticker: "CRWD"},
    { id: 4, ticker: "AMZN"},
  ]);

  const deleteItem = (id) => {
    setTickers((prevTickers) => {
      return prevTickers.filter((ticker) => ticker.id != id);
    });
  };

  const addItem = ticker => {
    if (!ticker) {
      Alert.alert('Error', 'Please enter a ticker', {ticker: 'Ok'});
    } else {
      setTickers(prevTickers => {
        return [{id: Math.random(), ticker}, ...prevTickers];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Investment Portfolio" />
      <AddItem addItem={addItem} />
      <FlatList
        data={tickers}
        renderItem={({ item }) => (
          <ListItem ticker={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

