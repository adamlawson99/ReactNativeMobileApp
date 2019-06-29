import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import {Header} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

export class RestaurantList extends React.Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Restaurants',
    headerRight: <Button
                     title="Cart"
                     onPress={ () => navigation.navigate('Cart')} />

  };
};
    render(){
        return (
          <ScrollView>
            <View style={styles.container}>
              <Card
                title="McDonald's"
                class="cardSize">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 353 McArthur Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={4.5}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="John Juan Burrito">
                <Image source={require('./images/johnjuanburrito.jpg')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Cheap Mexican Food, includes : Tacos, Nachos, Burritos, Cheese, Deep fried Cheese, more cheese, spicy
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $8 - $30
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 354 John Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={3}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="Supply And Demand">
                <Image source={require('./images/sp.jpg')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Stylish venue with an open kitchen, raw bar & rotating menu of creative, locally sourced cuisine.
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 79 Aviation Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={1}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="Shawarma Palace">
                <Image source={require('./images/ShawarmaPalace.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $7 - $20
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 6754 Donald Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={5}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="Perkins">
                <Image source={require('./images/Perkins.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Kid-friendly chain known for baked goods, breakfasts & other American standards in dinerlike digs.
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $12 - $30
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 69 Love Crescent
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={2}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="Rôtisserie St-Hubert">
                <Image source={require('./images/stHuberts.jpg')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Nos côtes levées BBQ et Style Texan sont parfaites pour vos BBQ d'été!
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $8 - $40
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 613 Cena Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={4}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="Dizengoff">
                <Image source={require('./images/dizengoff.jpg')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Za'atar Chicken, served with Pita, Hummus-Tehina and Chopped Salad. $36 - Feeds four. Take-out only. PHILADELPHIA WHOLE FOODS
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $15 - $25
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 5643 Ciena Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={3}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>

              <Card
                title="The Keg">
                <Image source={require('./images/theKeg.jpg')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $20 - $50
                </Text>
                <Text style={{marginBottom: 10}}>
                Location: 1943 Street Street
                </Text>
                <AirbnbRating
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={2}
                size={20}
                />
                <Button style={{marginBottom: 0}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    onPress={() => this.props.navigation.navigate('Menu')
                    }
                    title='ORDER NOW' />
              </Card>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default RestaurantList;
