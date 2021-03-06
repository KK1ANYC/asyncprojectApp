import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ ticker, deleteItem }) => {
  console.log("ticker", ticker);
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {ticker.ticker}  Shares: {ticker.shares}
        </Text>
        <Button
          title="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(ticker.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListItem;
