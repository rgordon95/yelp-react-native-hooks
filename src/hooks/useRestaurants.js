import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async searchTerm => {
        try {
        const response = await yelp.get('/search', {
            params: {
                term: searchTerm,
                location: 'jersey city',
                limit: 50,
            }
        });
        setRestaurants(response.data.businesses);
     } catch (err) {
        setErrorMessage('Something went wrong');
        }


    };

    useEffect(() => {searchAPI('pasta')}, []);

    return [searchAPI, restaurants, errorMessage];
};