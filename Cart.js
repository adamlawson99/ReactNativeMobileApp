import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

class FlatListItem extends Component{
  render() {
    return (
      <View style={{
        flex: 1,

      }}>
        <Text><Text>{this.props.item.quantity} X  </Text><Text>{this.props.item.item_name}</Text></Text>
        <Text>{this.props.item.item_total} $</Text>
      </View>
    );
  }
}

export default class Cart extends Component {
  state: {
    items: [],
    total: Number,
  }
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Cart'
  };
};
  constructor(props){
    super(props)
    this.calcTotal = this.calcTotal.bind(this);
    this.state = {
      items: this.props.navigation.getParam('items','no-items!'),
    }
    this.calcTotal = this.calcTotal.bind(this);
    this.add = this.add.bind(this);
    ototal = 0;
    items = this.state.items;
    for(var i = 0; i < items.length; i++){
      item = items[i];
      ototal += item.item_total; 
      item.item_total = ototal;
    }
    this.setState({total: ototal});
  }

calcTotal(){
  ototal = 0;
  items = this.state.items;
  for(var i = 0; i < items.length; i++){
    item = items[i];
    ototal += item.item_total; 
  }
  this.setState({total: ototal});
  return ototal;
}
remove(index){
  console.log(index);
  items = this.state.items;
  itemsarr = this.state.items;
  item = items[index]
  var newQuan = item.quantity - 1;
  if(newQuan == 0){
    itemsarr.splice(index,1);
    this.setState({items:itemsarr});
    this.deleteItemById(index);
    return;
  }
  item.quantity = newQuan;
  item.item_total = (item.item_price*item.quantity)
  this.setState({items: itemsarr});
  this.calcTotal();
}
add(index){
  console.log(index);
  items = this.state.items;
  itemsarr = this.state.items;
  item = items[index]
  var newQuan = item.quantity + 1;
  item.quantity = newQuan;
  item.item_total = (item.item_price*item.quantity)
  this.setState({items: itemsarr});
  this.calcTotal();
}

deleteItemById = id => {
  const filteredData = this.state.items.filter(item => item.key !== id);
  this.setState({ items: filteredData });
  if(this.state.items.length == 0){
    this.setState({total: 0});
  }
}

checkout(){
  console.log("here")
}

  render() {
    return (
      <View style ={{flex:1,marginTop: 22}}>
        <Card
          title="My order"
          class="cardSize">
        <FlatList data = {this.state.items} extraData = {this.state}
        renderItem={({item,index})=>{
          //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
          return (
          <View>
          <FlatListItem item ={item} index={index}>
          </FlatListItem>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Button style = {{marginRight: 5}}
            title = " + "
            onPress = {()=> this.add(index)}
          ></Button>
          <Button
            title = " - "
            onPress = {()=> this.remove(index)}
          ></Button>
          </View>
          </View>
          );
        }}>

        </FlatList>
        <Text>Order Total: {this.state.total}$</Text>
          <Button style = {{marginRight: 5}}
            title = " Checkout "
            onPress = {()=> this.props.navigation.navigate('Confirm', {total: this.state.total})}
          ></Button>
        </Card>
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
  item_name: { 
    marginRight: 50,
  }
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
