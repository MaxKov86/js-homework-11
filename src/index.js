import { fetchCards } from './fetch-cards';

const refs = {
  formSubmit: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

console.log(refs.formSubmit);

refs.formSubmit.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.searchQuery.value.trim();
  fetchCards(searchQuery).then(hits => {});
}

function renderCards(hits) {
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<div class="photo-card">
  <a class="photo-card__link" href="${largeImageURL}" ><img src="${webformatURL}" alt="${tags}" loading="lazy" /> </a>
  <div class="info">
    <p class="info-item">
      <b>Likes:${likes}</b>
    </p>
    <p class="info-item">
      <b>Views:${views}</b>
    </p>
    <p class="info-item">
      <b>Comments:${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:${downloads}</b>
    </p>
  </div>
</div>
  `
    )
    .join('');
}
