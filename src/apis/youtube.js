import axios from 'axios'

const KEY = 'AIzaSyBkYOZVhs0ciOADve8HfWnVcNp0p1-9Uss'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
