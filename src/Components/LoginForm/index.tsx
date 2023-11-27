import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import Styles from './styles';
import lock from '../../Assets/lock.png';
import hide from '../../Assets/eye.png';
import mail from '../../Assets/mail.png';
import show from '../../Assets/open_eye.png';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    Email:  yup.string()
        .required()
        .email()
        .min(3),
    Password: yup.string()
        .required()
        .min(8)
});

interface loginFormTypes{
    navigation: {
        navigate: Function,
        push: Function
    }
}

const LoginForm = ({ navigation}: any) => {
    const [securePass, setSecurePass] = useState(true);

    const onLockPress = () => {
        if (securePass == true) {
            setSecurePass(false)
        } else {
            setSecurePass(true)
        }
    };

    const onSubmit = async (value: any, actions: any) => {
        if(value.Email == "demo@yopmail.com" && value.Password == "demo@124"){
            Alert.alert('Success', 'Login Successful', [
                {
                  text: 'OK',
                  onPress: () => navigation.push('Home'),
                  style: 'cancel',
                },
                
              ]);
            value.Email = "";
            value.Password = "";
        }
        else {
            Alert.alert('Login Failed', 'Kindly check your Email and Password');
        }
    }

    return (
        <View style={Styles.form} testID="LoginFormContainer">
            <Text style={Styles.formHeader}>Login</Text>
            <Formik
                initialValues={{Email: '', Password: '' }}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <View>
                        <View style = {Styles.inputRow}>
                        <Image
                                style={Styles.lockImage}
                                source={mail}
                            />
                            <TextInput 
                                style = {Styles.phoneInput}
                                placeholder='Email'
                                placeholderTextColor={"#323948"}
                                value= {props.values.Email}
                                onChangeText = {props.handleChange('Email')}
                                onBlur={props.handleBlur('Email')}
                            />
                        </View>
                        <Text style = {Styles.errorMessage}> { props.touched.Email && props.errors.Email} </Text>
                        <View style={Styles.inputRow}>
                            <Image
                                style={Styles.lockImage}
                                source={lock}
                            />
                            <View style={Styles.passwordContainer}>
                                <TextInput
                                    style={Styles.phoneInput}
                                    placeholder='Password'
                                    placeholderTextColor={"#323948"}
                                    value={props.values.Password}
                                    onChangeText={props.handleChange('Password')}
                                    onBlur={props.handleBlur('Password')}
                                    textContentType='password'
                                    secureTextEntry={securePass}
                                />
                                <Pressable onPress={onLockPress}>
                                    {
                                        securePass ? 
                                        <Image
                                        style={Styles.lockImage}
                                        source={hide}
                                    />
                                    :
                                    <Image
                                        style={Styles.lockImage}
                                        source={show}
                                    />
                                    }
                                    
                                </Pressable>
                            </View>
                        </View>
                        <Text style={Styles.errorMessage}> {props.touched.Password && props.errors.Password} </Text>
                        <View style={Styles.signUpButtonContainer}>
                            <Pressable style={Styles.signUpButton} onPress={() => props.handleSubmit()} >
                                <Text style={Styles.signUpText}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </Formik>


        </View>
    )
}

export default LoginForm;