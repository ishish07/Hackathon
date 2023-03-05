import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screen/Home';
import GetStarted from '../screen/GetStarted';
import Login from '../screen/Login';
import BottemTab from '../screen/BottomTab';


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
 
},
BottemTab: {
    screen: BottemTab,
    navigationOptions: {
        title: ''
    },
    navigationOptions: { header: false },
    
}

}



const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);