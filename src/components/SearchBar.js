import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.searchIconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.inputStyle}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            value={term}
        />
    </View>
)};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    searchIconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15,
    }
});

export default SearchBar;