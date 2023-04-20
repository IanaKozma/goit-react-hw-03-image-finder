const URL = 'https://pixabay.com/api/';
const KEY = '34128058-61007cddafffab4d625916ab2';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = (query, page = 1) => {
    return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
        response => response.json()
    );
}