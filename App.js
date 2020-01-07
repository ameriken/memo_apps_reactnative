import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.appbar}>
              <View>
                  <Text>MEMOT</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
