import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from './../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo}/>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/31296766?v=4'}}/>
          <View>
            <Text style={styles.name}>Dino Tudor</Text>
            <Text style={styles.bio}>Bio </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/31296766?v=4'}}/>
          <View>
            <Text style={styles.name}>Dino Tudor</Text>
            <Text style={styles.bio}>Bio </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/31296766?v=4'}}/>
          <View>
            <Text style={styles.name}>Dino Tudor</Text>
            <Text style={styles.bio}>Bio </Text>
          </View>
        </View>

      </View>
      <View />

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
    card: {
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 8,
      margin: 30,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    avatar: {
      flex: 1,
      height: 300,
    },
})
