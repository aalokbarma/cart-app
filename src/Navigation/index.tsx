import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean|null|string>(false)

    const retrieveData = async() => {
        try {
            const data = await AsyncStorage.getItem("KeepLoggedIn");
            setIsLoggedIn(data);
        } catch (error) {}
    }

    useEffect(() => {
        retrieveData();
    }, [isLoggedIn])

    
    const AuthStackNavigator = () => {
        return(
            <AuthStack.Navigator initialRouteName={isLoggedIn == 'true' ?'Home':'Login'} screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="Login" component={LoginScreen} />
                <AuthStack.Screen name="Home" component={HomeScreen} />
            </AuthStack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <AuthStackNavigator />
        </NavigationContainer>
    )
};

export default Navigation;