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
        'x-rapidapi-key': '4ce722ac1emsh6c4e374c552e3e6p1a6480jsn8f00b62bfdab'
      }
    };
    
    return await axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
        console.error(error);
    });
}
