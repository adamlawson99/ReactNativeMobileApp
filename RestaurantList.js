import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import {Header} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';

export class RestaurantList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Restaurants',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginRight: '40%',
            marginLeft: 'auto',
          },
        };
      };
    render(){
        return (
          <ScrollView>
            <View style={styles.container}>
              <Card
                title="McDonald's">
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
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
                title="McDonald's">
                <Image source={require('./images/mcdonalds.png')}style={{width: 40, height: 40}} />
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
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
