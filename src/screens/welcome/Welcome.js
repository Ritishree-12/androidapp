import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Welcome = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View style={{ flex: 4, backgroundColor: 'white' }}>
        <Image
          style={styles.image}
          source={require('../../../assets/welcome.png')}
        />
      </View>
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>Have a better sharing experience</Text>
      </View>
      <View style={{ flex: 1.5, backgroundColor: 'white' }}>
        <TouchableOpacity
          style={[styles.button, styles.activeButton]}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 55,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: '#E74C3C',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#EE272E',
  },
  buttonText: {
    color: '#EE272E',
    fontSize: 18,
    fontWeight: '400',
  },

  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  text1: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 28,
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    fontSize: 20,
    margin: 13,
    color: 'grey',
  },
  image: {
    alignSelf: 'center',
    margin: 40,
    objectFit: 'cover',
  },
});
