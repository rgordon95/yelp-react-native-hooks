import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const RestaurantDetail = ({restaurant}) => {
    const { name, price, rating, review_count } = restaurant;


    return (
    <View style={styles.container}>
         <Text style={styles.titleStyles}>{name}</Text>
        <Image style={styles.imageStyle} source={{uri: restaurant.image_url}} />
        <View>
        <Text style={styles.rating}>{rating} Stars, {review_count} Reviews </Text>
        <Text>{price}</Text>
            </View>   
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      marginLeft: 15,
    },
    titleStyles: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 2,
        marginBottom: 5,
    }
});

export default RestaurantDetail;