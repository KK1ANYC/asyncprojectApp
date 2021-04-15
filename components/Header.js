import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.ticker}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Investment Portfolio',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  ticker: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
