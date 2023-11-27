import { View, Text, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Styles from './styles';
import ProductCard from '../../Components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import { getPostsList } from '../../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface navigationtypes{
  navigation: {
      navigate: Function,
      push: Function
  }
}

const HomeScreen = ({navigation}:navigationtypes) => {

    const dispatch = useDispatch();

  // In following line we get the posts data from reducer.
  const reduxPostsData = useSelector((state: any) => state.reducer);
  const updatedPostsData = reduxPostsData[0];

  // Here we are calling getPostsLists action whenever this home screen mounts
  useEffect(() => {
    dispatch(getPostsList());
  });

  const onSuccessfulLogout = () => {
    AsyncStorage.setItem("KeepLoggedIn", '');
    navigation.navigate("Login")
  }

  // When user Log out
  const onLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Logout',
        onPress: () => onSuccessfulLogout(),
        style: 'cancel',
      },
      {text: 'Cancel', onPress: () => {}},
      
    ]);
  }

  return (
    <View style = {Styles.homeScreen}>
        {
          updatedPostsData?.length > 0 ? 
          <>
            <FlatList 
              data={updatedPostsData}
              keyExtractor={({item, index}) => item}
              renderItem={(item) => <ProductCard item = {item} />}
              showsHorizontalScrollIndicator = {false}
              showsVerticalScrollIndicator = {false}
            />
            <TouchableOpacity style = {Styles.logoutButton} onPress={() => onLogoutPress()}>
              <Text style= {Styles.logoutText}>
                Logout
              </Text>
            </TouchableOpacity>
        </>
            : 
            <View style = {Styles.nothingComponentContainer}>
              <ActivityIndicator color={'#002dfe'} />
              <Text style = {Styles.noDataText}>Loading...</Text>
            </View>
        } 
        
    </View>
  )
}

export default HomeScreen;