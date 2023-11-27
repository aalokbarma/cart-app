import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean|null|string>(false)

    const retrieveData = async() => {
        try {
            const data = await AsyncStorage.getItem("KeepLoggedIn");
            setIsLoggedIn(data);
        } catch (error) {
            
        }
        
    }

    useEffect(() => {
        retrieveData();
    }, [])

    

    return(
        <NavigationContainer>
            {
                isLoggedIn ? 
                <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
            :
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
            }
        </NavigationContainer>
    )
};

export default Navigation;