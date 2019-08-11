import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import api from './../services/api'

import logo from './../assets/logo.png';
import dislike from './../assets/dislike.png';
import like from './../assets/like.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo}/>

      <View style={[styles.cardsContainer, { zIndex: 3 } ]}>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/31296766?v=4'}}/>
          <View style={styles.footer}>
            <Text style={styles.name}>Dino Tudor</Text>
            <Text style={styles.bio} numberOfLines={3}>Bio </Text>
          </View>
        </View>

      </View>

      <View style={styles.buttonsContainers}>
        <TouchableOpacity>
          <Image style={styles.button} source={dislike}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.button} source={like}/>
        </TouchableOpacity>
      </View>
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
  logo: {
    marginTop: 30,
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
    footer: {
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    bio: {
      fontSize: 14,
      color: '#999',
      marginTop: 5,
      lineHeight: 20
    },
    buttonsContainers: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      shadowColor: '#FFF',
      shadowOpacity: 0.05,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 2,
      }
    },

})
