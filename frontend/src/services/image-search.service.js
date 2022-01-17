import axios from 'axios'

export const imageSearchService = {
    query
}

async function query(q) {
    var options = {
      method: 'GET',
      url: 'https://bing-image-search1.p.rapidapi.com/images/search',
      params: {q},
      headers: {
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
        'x-rapidapi-key': '<apiKey>'
      }
    };
    
    return await axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
        console.error(error);
        return []
    });
}
