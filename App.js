import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.appbar}>
              <View>
                  <Text style={styles.appbarTitle}>MEMOT</Text>
              </View>
          </View>
          <View style={styles.memoList}>
              <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>講座のアイテム</Text>
                  <Text style={styles.memoDate}>2017/10/10</Text>
              </View>
              <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>講座のアイテム</Text>
                  <Text style={styles.memoDate}>2017/10/10</Text>
              </View>
              <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>講座のアイテム</Text>
                  <Text style={styles.memoDate}>2017/10/10</Text>
              </View>
              <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>講座のアイテム</Text>
                  <Text style={styles.memoDate}>2017/10/10</Text>
              </View>
              <View style={styles.memoListItem}>
                  <Text style={styles.memoTitle}>講座のアイテム</Text>
                  <Text style={styles.memoDate}>2017/10/10</Text>
              </View>
          </View>
          <View>
              <Text>+</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: 60,
      paddingTop: 30,
      backgroundColor: '#265336',
      justifyContent: 'center',
      alignItems: 'center',
  },
  appbarTitle: {
      color: '#fff',
      fontSize: 18,
  },
});
