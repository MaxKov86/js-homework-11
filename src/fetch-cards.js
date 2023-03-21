const API_KEY = '?key=34526021-da361fec4a670d7e6ab3378e0';
const BASE_URL = `https://pixabay.com/api/`;

export function fetchCards(searchQuery) {
  return fetch(`${BASE_URL}${API_KEY}&q=${searchQuery}&image_type=photo`).then(
    res => res.json()
  );
}
