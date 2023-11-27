import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';
import logo from '../../Assets/app_logo.png'

const Header = () => {
    return (
        <View style = {Styles.loginHeader}>
            <Image style = {Styles.logoImage} source={logo} />
        </View>
    )
}

export default Header;