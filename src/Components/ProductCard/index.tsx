import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from './styles';

interface itemPropTypes{
    item:{
        item:{
            id: number | string,
            title: string,
            description: string,
            price: string | number,
            image: string,
        }
    },
}

const ProductCard = ({item}: itemPropTypes) => {
    
  return (
    <View style = {Styles.productCard}>
      <View style = {[Styles.cardContainer, Styles.shadowProp]}>
        <View style = {Styles.leftContainer}>
            <Image 
                source={{uri: item.item.image}}
                style = {Styles.cardImage}
            />
        </View>
        <View style = {Styles.rightContainer}>
            <Text style = {Styles.productTitle} numberOfLines={1}>{item.item.title}</Text>
            <Text style = {Styles.productDescription} numberOfLines={3}>{item.item.description}</Text>
            <View style = {Styles.priceContainer}>
                <Text style = {Styles.priceLabel}>Price:</Text>
                <Text style = {Styles.priceValue}>₹{item.item.price}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard;