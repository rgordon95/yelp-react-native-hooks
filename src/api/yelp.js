import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer Wivy_DPyjvhtkWOQf2sCbS_h5Uuyw6q8V3aTdxy5RyK8povGyUatArAYRG9oOToVa1q8AIZRzSLja3W_-hjtoHOaZZhEW4djI58JV2bJ5GTH-8P-YAmxjDXrY2CgXnYx',
    }
});