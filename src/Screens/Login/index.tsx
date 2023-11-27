import React from 'react';
import { ScrollView } from 'react-native';
import LoginForm from '../../Components/LoginForm';
import Header from '../../Components/Header';
import Styles from './styles';

interface loginScreenTypes{
    navigation: {
        navigate: Function
    }
}

const LoginScreen = ({navigation}: loginScreenTypes) => {

    return (
        <ScrollView style = {Styles.loginScreen} testID='LoginScreenContainer'>
            <Header />
            <LoginForm navigation={navigation}/>
        </ScrollView>
    )
}

export default LoginScreen;