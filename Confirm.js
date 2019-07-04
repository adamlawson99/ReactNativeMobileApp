import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { ScrollView } from 'react-native-gesture-handler';
import { AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

export default class Confirm extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Checkout'
    };
  };
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    this.firstnameRef = this.updateRef.bind(this, 'firstname');
    this.lastnameRef = this.updateRef.bind(this, 'lastname');
    this.emailRef = this.updateRef.bind(this,'email');
    this.provinceRef = this.updateRef.bind(this,'province');
    this.cityRef = this.updateRef.bind(this,'city');
    this.streetRef = this.updateRef.bind(this,'street');
    this.ccardNumberRef = this.updateRef.bind(this,'ccardNumber');
    this.ccardSecurityRef = this.updateRef.bind(this,'ccardSecurity');
    this.ccardExpRef = this.updateRef.bind(this,'ccardExp');


    this.state = {
      subTotal:this.props.navigation.getParam('total','no-total!'),
      HST: 0,
      deliveryFee: 2.99,
      OrderTotal:0,
      firstname: '',
      lastname: '',
      email: '',
      province:'',
      city:'',
      street:'',
      ccardNumber:'',
      ccardSecurity:'',
      ccardExp:'',

    }
  }
  onChangeText(text) {
    ['firstname','lastname','email','province','city','street','ccardNumber','ccardSecurity','ccardExp']
      .map((name) => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }

  onSubmit() {
    let errors = {};
    var ecount = 0;
    var emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var ccreg = /^[0-9]*$/;
    var nameReg = /^[a-zA-z]*$/;

    ['firstname','lastname','email','province','city','street','ccardNumber','ccardSecurity','ccardExp']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Should not be empty';
          ecount  = ecount + 1;
        } 
        else {
          if (name == 'email' && !emailReg.test(value)) {
            errors[name] = 'Invalid Format';
            ecount  = ecount + 1;
          }
          if((name == 'firstname' || name == 'lastname') && !nameReg.test(value)){
            errors[name] = 'must contain letters only';
            ecount  = ecount + 1;
          }
          if(name == 'ccardNumber' && !ccreg.test(value)){
            errors[name] = 'must contain numbers only';
            ecount  = ecount + 1;
          }
        }
      });

    console.log(ecount);
    if(ecount == 0){
      alert("Your order is on the way!");
    }
    this.setState({ errors });
    console.log(typeof(errors));
    // alert("Your order is on the way!")}
  }

  onSubmitFirstName() {
    this.lastname.focus();
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  calctotal(){
    var oHST = this.state.subTotal * 0.13;
    var  oTotal = this.state.HST + this.state.deliveryFee + this.state.subTotal;
    this.setState({
      OrderTotal: oTotal,
      HST:oHST,
    })
  }

  componentDidMount(){
    this.calctotal();
  }

  render() {
    let { errors = {}, ...data } = this.state;
    let { firstname = 'name', lastname = 'lastname',email='email',province='province',
          city = 'city', street = 'street', ccardNumber='ccardNumber',ccardSecurity='ccardSecurity',
          ccardExp = 'ccardExp'
        } = data;

    return (
      <View style = {styles.container}>
      <ScrollView style = {styles.container}>
      <Card
        title="Billing Information"
        class="cardSize">
          <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
          <TextField
            ref={this.firstnameRef}
            value={data.firstname}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitFirstName}
            returnKeyType='next'
            label='First Name'
            error={errors.firstname}
          />
          </View>
          <View style={{flex:1}}>
          <TextField
              ref={this.lastnameRef}
              value={data.lastname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Last Name'
              error={errors.lastname}
            />
            </View>
            </View>
            <TextField
              ref={this.emailRef}
              value={data.email}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Email'
              error={errors.email}
            />
            <TextField
              ref={this.provinceRef}
              value={data.province}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Province'
              error={errors.province}
            />
            <TextField
              ref={this.cityRef}
              value={data.city}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='city'
              error={errors.city}
            />
            <TextField
              ref={this.streetRef}
              value={data.street}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Street name and number'
              error={errors.street}
            />
            <TextField
              ref={this.ccardNumberRef}
              value={data.ccardNumber}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Credit Card Number'
              error={errors.ccardNumber}
            />
            <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
            <TextField
              ref={this.ccardSecurityRef}
              value={data.ccardSecurity}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Security Code'
              error={errors.ccardSecurity}
            />
            </View>
            <View style={{flex:1}}>
            <TextField
              ref={this.ccardExpRef}
              value={data.ccardExp}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Expiry Date (MMYY)'
              error={errors.ccardExp}
            />
            </View>
            </View>
      </Card>
      <Text>Order Subtotal: {this.state.subTotal}$</Text>
      <Text>HST: {this.state.HST}$</Text>
      <Text>Delivery Fee: {this.state.deliveryFee}$</Text>
      <Text>Order Total: {this.state.OrderTotal}$</Text>
      <Button 
      backgroundColor='#03A9F4'
      buttonStyle={{height: 65, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
      onPress = { ()=> {this.onSubmit()} }
      title = "Confirm and Pay"
      ></Button>
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