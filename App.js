import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createDrawerNavigator} from "react-navigation";

class HomeScreen extends Component {
  render = () => <View style={styles.home}><Text style={styles.homeText}>Drag me --></Text><Text style={styles.homeText}>{'<'}-- Drag me</Text></View>
}

export default createAppContainer(
  createDrawerNavigator({
      SecondDrawer: createDrawerNavigator({
        HomeScreen: HomeScreen,
      }, {
        drawerType: 'slide',
        drawerPosition: 'right',
        overlayColor: 'transparent',
        style: {backgroundColor: 'green'},
        edgeWidth: 200,
      })
    },
    {
      drawerType: 'slide',
      overlayColor: 'transparent',
      style: {backgroundColor: 'green'},
      edgeWidth: 200,
    },
    {
      initialRouteName: 'HomeScreen',
    })
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'purple',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    color: 'white',
    margin: 10,
  }
});
