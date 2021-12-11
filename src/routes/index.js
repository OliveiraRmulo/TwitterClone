import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../screens/Login";
import Home from "../screens/Home";

const Stack = createStackNavigator()

function Routes (){

    return(
        <Stack.Navigator screenOptions={{ headerTransparent:true, headerShown:false }} >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}

export default Routes;