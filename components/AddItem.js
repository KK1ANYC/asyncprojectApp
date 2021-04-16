import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem, text, setText, share, setShare }) => {

  return (
    <View>
      <TextInput
        placeholder="Add Ticker..."
        style={styles.input}
        onChangeText={(textValue) => setText(textValue)}
      />
      <TextInput
        placeholder="Add share amount..."
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(numShare) => setShare(numShare)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text, share) }>
        <Text style={styles.btnText}>
          Add Ticker
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
