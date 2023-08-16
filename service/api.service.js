import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '10',
    },
    headers: {
        'X-RapidAPI-Key': 'a5e7f0f370msh754a95a696b3ba6p1f6124jsnfb10baa9a533',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
}

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}




