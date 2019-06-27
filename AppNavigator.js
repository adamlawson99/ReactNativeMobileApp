import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import RestaurantList from './RestaurantList';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  RestaurantList: { screen: RestaurantList}
});

const MyApp = createAppContainer(AppNavigator);
export default MyApp;