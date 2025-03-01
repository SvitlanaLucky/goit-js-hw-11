import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '49125408-1e88d53d2f02a90c3d8910cce',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
});

export function getAllPhotos(inputValue) {
  instance.defaults.params.q = inputValue;
  return instance
    .get()
    .then(res => res.data.hits)
    .catch(() => {
      console.error('Error');
    });
}
