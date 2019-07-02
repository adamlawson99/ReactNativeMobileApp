import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon} from 'react-native-elements';

export default class FlatListBasics extends Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Menu',
    headerRight: <Button
                     title="Cart"
                     onPress={ () => navigation.navigate('Cart', {items: items})} />

  };
};
  render() {
    var apple = new item("Apple slices", 1.99, "1");
    var fries = new item("Fries", 2.75,"2");
    var poutine = new item("Poutine",4.89,3);
    var softDrink = new item("Soft Drink", 0.99, 4);
    var quarterPounder = new item("Quarter Pounder", 3.99, 5);
    var BLTChickenCrisp = new item("BLT Chicken Crisp", 5.99, 6);
    var doubleBigMac = new item("Double BigMac", 7.99, 7);
    var vanillaIceCream = new item("Vanilla Ice Cream Cone", 1.99, 8);
    var hotFudgeSundae = new item("Hot Fudge Sunday", 2.99,9);
    var oreoMcFlurry = new item("Oreo McFlurry", 3.99, 10)

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
              onPress={() => { addtocart(apple);}}
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
              onPress={() => addtocart(fries)}
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
              onPress={() => addtocart(poutine)}
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
                  onPress={() => addtocart(softDrink)}
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
              onPress={() => addtocart(quarterPounder)}
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
              onPress={() => addtocart(BLTChickenCrisp)}
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
              onPress={() => addtocart(doubleBigMac)}
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
              onPress={() =>addtocart(vanillaIceCream)}
              title='ADD TO CART' />
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>

          <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Hot Fudge Sundae
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
              onPress={() => addtocart(hotFudgeSundae)}
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
              onPress={() => addtocart(oreoMcFlurry)}
              title='ADD TO CART' />
        </Card>
      </ScrollView>
      <Button
          backgroundColor='#03A9F4'
          buttonStyle={{height: 65, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => this.props.navigation.navigate('Cart', {items: items})}
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

var items = [];

export function addtocart(item){
  for(var i = 0; i < items.length; i++){
    //see if the item is already in the array and increase the quantity if it is
    if(items[i].key== item.key){
      more(items[i]);
      alert("item " + item.item_name + " has been added to your cart");
      return;
    }
  }
  items.push(item);
  more(item);
  alert("item " + item.item_name + " has been added to your cart");

}

export class item {
  item_name;
  item_price;
  key;
  quantity;
  item_total;

  constructor(item,price,key) {
      this.item_name = item;
      this.item_price = price;
      this.key = key;
      this.quantity = 0;
      this.item_total = price;
  }
  
}

export function more(item) {
  item.quantity += 1;
  item.item_total = item.item_total * item.quantity;
}

export function less(item) {
  this.quantity -= 1;
  item.item_total = item.item_total * item.quantity;
}

export function getItems(){
  return items;
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
