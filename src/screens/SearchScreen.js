import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import { TextInput } from 'react-native-gesture-handler';
import  useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('jersey city');
    const [searchAPI, restaurants, errorMessage] = useRestaurants();
    console.log(restaurants);

    const filterResultsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            console.log(restaurant.name, restaurant.price);
            return restaurant.price === price;
        }
        )
    };

    return (
    <>
        <TextInput placeholder="jersey city" location={location} onLocationChange={setLocation} />
        <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchAPI(term)} 
        />
        {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
        <Text style={styles.text}>We have found {restaurants.length} results!</Text>
        <ScrollView>
        <RestaurantList restaurants={filterResultsByPrice('$')} title={'Cheap Eats'} />
        <RestaurantList restaurants={filterResultsByPrice('$$')} title={'Moderate Fare'} />
        <RestaurantList restaurants={filterResultsByPrice('$$$')} title={'Big Spender'} />
        <RestaurantList restaurants={filterResultsByPrice('$$$$')} title={'Baller'} />
        </ScrollView>
    </>
    )
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        color: 'red',
    },
});

export default SearchScreen;