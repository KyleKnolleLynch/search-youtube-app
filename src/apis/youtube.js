import axios from 'axios';


const KEY = 'AIzaSyD03H4O33CIGRkpxn9xfyNRdE8NMi1sjOU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults: 6,
    key: KEY
  }
});