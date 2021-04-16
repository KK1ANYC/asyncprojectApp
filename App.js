import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [tickers, setTickers] = useState([
    { id: 1, ticker: "TSLA", shares: "50" },
    { id: 2, ticker: "PLTR", shares: "200" },
    { id: 3, ticker: "CRWD", shares: "50" },
    { id: 4, ticker: "AMZN", shares: "50" },
  ]);

  const [text, setText] = useState("");

  const [share, setShare] = useState("");

  const deleteItem = (id) => {
    setTickers((prevTickers) => {
      return prevTickers.filter((ticker) => ticker.id != id);
    });
  };

  const addItem = (ticker, share) => {
    if (!ticker && !share) {
      Alert.alert("Error", "Please enter a ticker", { ticker: "Ok" });
    } else {
      setTickers((prevTickers) => {
        return [{ id: Math.random(), ticker, shares: share }, ...prevTickers];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Investment Portfolio" />
      <AddItem
        addItem={addItem}
        text={text}
        setText={setText}
        share={share}
        setShare={setShare}
      />
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
