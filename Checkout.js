import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

export default class FlatListBasics extends Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Checkout'
  };
};
    constructor(){
        super()
        this.state = {
            firstname: String,
          }
    }


submit(){
    console.log(this.validateFirstname(this.state.firstname));
}

validateFirstname = (FirstName) => {
    var re = /^[a-zA-Z" +"]+$/;
      return re.test(FirstName);
};

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Card
          title="Billing Information"
          class="cardSize">
          <View style={{flexDirection:"row", borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View style={{flex:1}}>
                  <TextInput placeholder="First Name" value={this.state.firstname} onChangeText= {(firstname) => this.setState({firstname})} style={{justifyContent: 'flex-start', fontSize: 25}} />
              </View>
              <View style={{flex:1}}>
                  <TextInput placeholder="Last Name" style={{justifyContent: 'flex-end', fontSize: 25}} />
              </View>
          </View>
          <View style={{borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View>
                  <Text style={{justifyContent: 'flex-start',}}>Card Number</Text>
              </View>
              <View>
                  <TextInput placeholder="xxxx-xxxx-xxxx-xxxx" style={{justifyContent: 'flex-end', fontSize: 25}} />
              </View>
          </View>
          <View style={{flexDirection:"row", borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View style={{flex:1}}>
                  <Text style={{justifyContent: 'flex-start',}}>Card Security Number</Text>
              </View>
              <View style={{flex:1}}>
                  <TextInput placeholder="xxx" style={{justifyContent: 'flex-end', fontSize: 25,}} />
              </View>
          </View>
          <View style={{flexDirection:"row", borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View style={{flex:1}}>
                  <Text style={{justifyContent: 'flex-start',}}>Province</Text>
              </View>
              <View style={{flex:1}}>
                  <TextInput placeholder="|" style={{justifyContent: 'flex-end', fontSize: 25,}} />
              </View>
          </View>
          <View style={{flexDirection:"row", borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View style={{flex:1}}>
                  <Text style={{justifyContent: 'flex-start',}}>City</Text>
              </View>
              <View style={{flex:1}}>
                  <TextInput placeholder="|" style={{justifyContent: 'flex-end', fontSize: 25,}} />
              </View>
          </View>
          <View style={{flexDirection:"row", borderBottomColor: '#000000', borderBottomWidth: 1}}>
              <View style={{flex:1}}>
                  <Text style={{justifyContent: 'flex-start',}}>Street Address</Text>
              </View>
              <View style={{flex:1}}>
                  <TextInput placeholder="|" style={{justifyContent: 'flex-end', fontSize: 25,}} />
              </View>
          </View>
        </Card>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>
          Total
          </Text>
          <Text style={{fontSize: 20}}>
          Price : $1230.3254
          </Text>
        <Button
            backgroundColor='#03A9F4'
            buttonStyle={{height: 65, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={() => this.submit()}
            title='CONFIRM AND PAY' />
        </ScrollView>
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
