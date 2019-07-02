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
  }

calcTotal(){
  var total = 0;
  items = this.state.items;
  for(var i = 0; i < items.length; i++){
    item = items[i];
    total += item.item_total;
  }
  return total;
}
remove(item){
  console.log("Remove");
  console.log(item);
}
add(item){
  console.log("Add");
  console.log(item);
}

  render() {
    console.log(this.state.items);
    return (
      <View style ={{flex:1,marginTop: 22}}>
        <Card
          title="My order"
          class="cardSize">
        <FlatList data = {this.state.items} extraData = {this.state}
        renderItem={({item,index})=>{
          console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
          return (
          <View>
          <FlatListItem item ={item} index={index}>
          </FlatListItem>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Button style = {{marginRight: 5}}
            title = " + "
            onPress = {()=> this.add(item)}
          ></Button>
          <Button
            title = " - "
            onPress = {()=> this.remove(item)}
          ></Button>
          </View>
          </View>
          );
        }}>

        </FlatList>
        <Text>Order Total: {this.calcTotal()}$</Text>
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
