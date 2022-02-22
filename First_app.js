import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function First_app() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello!!</Text>
      <Text style={styles.text}>Hello!!</Text>
      <StatusBar style="auto" /> */}
      <View style={styles.yellowView}>
      </View>
      <View style={styles.blueView}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // 모든 공간이 사용 가능하도록 가져간다.
    flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    color: "black"
  },
  yellowView: {
    //모든 공간을 가지고 싶다면 flex: 1 을 준다. 
    // blue도 flex: 1 을 가지기 때문에 1/2씩 나누어가지게 된다.
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 1,
    //4/5 를 blueview가 차지하게 된다.
    //flex: 4,
    backgroundColor: "blue"
  }
});
