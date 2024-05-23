import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChecaNumero from './components/ChecaNumero';


  export default class App extends React.Component {
  render() {
  return (
  <ChecaNumero numero={9} />
  );
  }
  }