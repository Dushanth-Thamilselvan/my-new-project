
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Passwordscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Passwordscreen;
