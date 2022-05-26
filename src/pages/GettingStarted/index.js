import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import React from 'react';
import {BackgroundGettingStart} from '../../assets/';

const GettingStarted = ({navigation}) => {
  return (
    <ImageBackground source={BackgroundGettingStart} style={styles.background}>
      <View style={styles.page2}>
        <Button
          style={styles.button}
          color="#3A21D4"
          title="Get Started"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </ImageBackground>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2: {
    borderRadius: 10,
  },
});
