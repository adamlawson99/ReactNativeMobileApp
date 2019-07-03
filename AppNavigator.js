import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import RestaurantList from './RestaurantList';
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirm from './Confirm';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  RestaurantList: { screen: RestaurantList},
  Menu: {screen: Menu},
  Cart: {screen: Cart},
  Checkout: {screen: Checkout},
  Confirm: {screen:Confirm}
});

const MyApp = createAppContainer(AppNavigator);
export default MyApp;
