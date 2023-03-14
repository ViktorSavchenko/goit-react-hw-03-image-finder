const API_KEY = '34370171-1ca1f1d45c186e01089e483bb';
const IMAGE_TYPE = 'photo';
const SEARCH_IMAGE = '';
const PAGE = 1;
const PER_PAGE = 12;

function fetchImages(searchImage = SEARCH_IMAGE, currentPage = PAGE) {
  const URL = `https://pixabay.com/api/?q=${searchImage}&page=${currentPage}&key=${API_KEY}&image_type=${IMAGE_TYPE}&orientation=horizontal&per_page=${PER_PAGE}`;

  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

const api = { fetchImages };

export default api;
