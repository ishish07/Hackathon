import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screen/Home';
import GetStarted from '../screen/GetStarted';
import Login from '../screen/Login';

const screens = {
    Home: {
    screen: Home
},
GetStarted: {
    screen: GetStarted,
navigationOptions: {
    title: 'Sign Up'
}
},
Login: {
 screen: Login
}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);