import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createStackNavigator(
  {
   Search: SearchScreen,
   Details: DetailsScreen,
 },
 {
   initialRouteName: 'Search',
   defaultNavigationOptions: {
     title: 'Restaurant Search'
  }, 
 }
);

export default createAppContainer(navigator);

