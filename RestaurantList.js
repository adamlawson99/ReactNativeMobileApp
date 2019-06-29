import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
            <View style={styles.container}>
              <Card
                title="McDonald's">
                <Text style={{marginBottom: 10}}>
                Iconic Fast Food Chain Serving Burgers, Fries, Salads, Ice Cream And More
                </Text>
                <Text style={{marginBottom: 10}}>
                Price Range: $1 - $15
                </Text>
                <AirbnbRating
                count={5}
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
            </View>
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
