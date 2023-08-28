import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_tAlX7YHrbVKR6CnTjGAd65dUwsTjM6kd9lIhnGmUqHKeJEUDccvWXALELujdgLV6';
const API_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;
function fetchBreeds() {
  return axios.get(API_URL);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}
export { fetchBreeds, fetchCatByBreed };
