import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RestaurantDetail from './RestaurantDetail';
import {withNavigation } from 'react-navigation';

const RestaurantList = ({ restaurants, title, navigation }) => {
if (!restaurants.length) {
    return null;
}

    return (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title} - {restaurants.length} Results</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={( restaurant ) => restaurant.id}
            data={restaurants}
            renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate("Details", {
                id: item.id
            })}>
                <RestaurantDetail restaurant={item}/>
                </TouchableOpacity>)} 
          />
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    text: {
        color: 'red'
    }
});

export default withNavigation(RestaurantList);