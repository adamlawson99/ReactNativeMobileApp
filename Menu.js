import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

export default class FlatListBasics extends Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Menu',
    headerRight: <Button
                     title="Cart"
                     onPress={ () => navigation.navigate('Cart')} />

  };
};
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Card
          title="Sides and Drinks"
          class="cardSize">

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Sliced Apples
          </Text>
          <Image source={require('./images/mcdonalds-apple-slices.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Yummy processed apples, slightly Healthy
          </Text>
          <Text>
          Price : $1.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Fries
          </Text>
          <Image source={require('./images/mcdonalds-fries-medium.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Yummy processed Potato, deepfried to a crisp.
          </Text>
          <Text>
          Price : $2.75
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Poutine
          </Text>
          <Image source={require('./images/mcdonalds-poutine.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Yummy processed Potato, deepfried to a crisp. BUT, this time in gravy with cheese
          </Text>
          <Text>
          Price : $4.89
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
              <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

              <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Soft Drink
              </Text>
              <Image source={require('./images/mcdonalds-coca-cola.jpg')}style={{width: 100, height: 100}} />
              <Text>
              Better than Water
              </Text>
              <Text>
              Price : $0.99
              </Text>
              <Button style={{marginBottom: 10}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  onPress={() => alert('Added!')}
                  title='ADD TO CART' />
        </Card>

        <Card
          title="Burgers"
          class="cardSize">

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Quarter Pounder
          </Text>
          <Image source={require('./images/mcdonalds-quarter-pounder-cheese.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Ten quarters of your daily sodium intake
          </Text>
          <Text>
          Price : $3.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          BLT Chicken Crisp
          </Text>
          <Image source={require('./images/mcdonalds-blt-chicken-crispy.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Healthier Meat, deepfried, with vegtables and bacon
          </Text>
          <Text>
          Price : $5.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Double BigMac
          </Text>
          <Image source={require('./images/mcdonalds-double-big-mac.jpg')}style={{width: 100, height: 100}} />
          <Text>
          For Men
          </Text>
          <Text>
          Price : $7.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
        </Card>

        <Card
          title="Burgers"
          class="cardSize">

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Vanilla IceCream Cone
          </Text>
          <Image source={require('./images/mcdonalds-vanilla-cone.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Vanilla icecream, one of the bests desserts in the world
          </Text>
          <Text>
          Price : $1.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Hot Fudge Sunday
          </Text>
          <Image source={require('./images/mcdonalds-hot-fudge-sundae.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Vanilla icecream with hot fudge on it, in a cup
          </Text>
          <Text>
          Price : $2.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Oreo McFlurry
          </Text>
          <Image source={require('./images/mcdonalds-oreo-mcflurry.jpg')}style={{width: 100, height: 100}} />
          <Text>
          Vanilla icecream with hot fudge on it, in a cup, with oreos
          </Text>
          <Text>
          Price : $3.99
          </Text>
          <Button style={{marginBottom: 10}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => alert('Added!')}
              title='ADD TO CART' />
        </Card>
      </ScrollView>
      <Button
          backgroundColor='#03A9F4'
          buttonStyle={{height: 65, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => this.props.navigation.navigate('Cart')}
          title='CHECKOUT' />
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
