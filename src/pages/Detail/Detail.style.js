import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  image: {
    backgroundColor: '#fff',
    marginTop: '6%',
    alignSelf: 'center',
    width: '90%',
    minHeight: '60%',
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#a9a8a8',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  desc: {
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  price: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'right',
    marginTop: 10,
    marginRight: 10,
  },
});
