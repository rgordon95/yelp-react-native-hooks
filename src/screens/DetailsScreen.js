import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation }) => {
const [restaurant, setRestaurant] = useState(null);

   const getRestaurant = async id => {
    const res = await yelp.get(`/${id}`)
    setRestaurant(res.data);
   };

   useEffect(() => {
    getRestaurant(id)
   }, []);

   const id = navigation.getParam('id');
   if (!restaurant) {
       return null;
   }

   console.log(restaurant);
    return (
    <View>
        <Text style={styles.text}>{restaurant.name}</Text>
        <Text style={styles.text}>Price: {restaurant.price}</Text>
        <Text style={styles.text}>Rating {restaurant.rating}</Text>
        <Text style={styles.text}>Number of Reviews: {restaurant.review_count}</Text>
        <Text style={styles.text}>Photos: </Text>

        <FlatList 
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
            return <Image source={{uri: item }} style={styles.image} /> 
        }}
        />
    </View>
    )}

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        height: 150, 
        width: 250,
        marginVertical: 3,
    },
    text: {
        fontWeight: 'bold',
    },
});

export default DetailsScreen;