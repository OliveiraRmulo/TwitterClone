import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator()

function MainStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}


export default MainStack;

// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator} from '@react-navigation/stack';
// import {Home} from '../screens'

// const MainStack = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             title:"Pagina inicial",
//         },
//     },

// });

// const Drawer = createDrawerNavigator ({
//     Main: MainStack,
// });

// export default createAppContainer(Drawer);
