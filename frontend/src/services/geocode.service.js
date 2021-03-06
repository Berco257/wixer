import axios from 'axios';

const getGeoLocation = async (address) => {
    const API_KEY = '<apiKey>'
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`

    return await axios.get(url)
        .then(res => {
            return res.data.status === 'OK' ? res.data.results[0].geometry.location : null;
        })
}

export const geocodeService = {
    getGeoLocation
}