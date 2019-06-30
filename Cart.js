import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

export default class FlatListBasics extends Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Cart'
  };
};
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Card
          title="Sliced Apples"
          class="cardSize">
          <Image source={require('./images/mcdonalds-apple-slices.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Yummy processed apples, slightly Healthy
          </Text>
          <Text>
          Price : $1.99
          </Text>
          <Text>Amount: 2</Text>
          <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Button title="-" style={{justifyContent: 'flex-start',}} />
                    </View>
                    <View style={{flex:1}}>
                        <Button title="+" style={{justifyContent: 'flex-end',}} />
                    </View>
          </View>
        </Card>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>
          Total
          </Text>
          <Text style={{fontSize: 20}}>
          Price : $1230.3254
          </Text>

        </ScrollView>
        <Button
            backgroundColor='#03A9F4'
            buttonStyle={{height: 65, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={() => this.props.navigation.navigate('Checkout')}
            title='CONTINUE CHECKOUT' />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
