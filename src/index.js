import './style.css';
import './modules/importing-images.js';
import {
  searchByLetter, searchByName, giveLike, getLike,
} from './modules/API.js';
import commentPopup from './modules/commentPopup.js';

// -------- constants --------------

const defaultSearchLetter = 'b';
const items = document.getElementById('items');
const pagination = document.getElementById('pagination');
const search = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
let meals = [];
let likes = [];

// -------- functions --------------

const loadLikes = () => {
  if (likes.length > 0) {
    likes.forEach((itemObj) => {
      const item = document.getElementById(itemObj.item_id);
      if (item) {
        item.innerHTML = itemObj.likes;
      }
    });
  }
};

const handleChecked = (id, label, checkbox) => {
  if (checkbox) {
    label.style.pointerEvents = 'none';
    giveLike(id).then(() => {
      const item = document.getElementById(id);
      const likeCount = parseInt(item.innerHTML, 10) + 1;
      item.innerHTML = likeCount;
      label.style.pointerEvents = 'all';
    });
  }
};

const loadHtmlContent = (pageNum) => {
  items.innerHTML = '';
  if (meals.length > 0) {
    for (let i = (pageNum * 10) - 10; i < (pageNum * 10) + 2; i += 1) {
      const li = document.createElement('li');
      // ------------------ Other elements ------------
      const image = document.createElement('img');
      image.alt = 'Meal Image';
      image.src = meals[i].strMealThumb;

      const itemName = document.createElement('h4');
      itemName.className = 'itemName';
      itemName.innerHTML = `<b><p>${meals[i].strMeal}</p></b>`;

      const itemCategory = document.createElement('h4');
      itemCategory.innerHTML = meals[i].strCategory;

      const tagsContainer = document.createElement('ul');
      tagsContainer.className = 'tags-container';
      tagsContainer.innerHTML = `
        <li>${meals[i].strIngredient1}</li>
        <li>${meals[i].strIngredient2}</li>
        ${(meals[i].strIngredient1.length + meals[i].strIngredient2.length < 15) ? `<li>${meals[i].strIngredient3}</li>` : ''}
      `;

      const line = document.createElement('div');
      line.className = 'line';

      // ------------------ Interactions ------------
      const interactions = document.createElement('div');
      interactions.className = 'interactions';
      // -------- Label --------
      const likeCount = 0;
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.style.display = 'none';
      const id = meals[i].idMeal;
      checkbox.addEventListener('change', (e) => {
        handleChecked(id, label, e.target.checked);
      });
      const hearth = document.createElement('div');
      hearth.className = 'hearth';
      label.className = 'like';
      label.append(checkbox, hearth);

      // -------- Like count --------
      const likes = document.createElement('span');
      likes.className = 'like-count';
      likes.id = meals[i].idMeal;
      likes.innerHTML = `${likeCount}`;

      // -------- comment --------
      const comment = document.createElement('span');
      comment.innerHTML = '<b>Comment</b>';

      interactions.append(label, likes, comment);

      li.append(image, itemName, itemCategory, tagsContainer, line, interactions);
      items.appendChild(li);
      if (i === meals.length - 1) break;
    }
  }
  getLike().then((res) => {
    likes = res;
    loadLikes();
  });
};

const unselectOtherPages = () => {
  const otherPages = document.querySelectorAll('.selectedPage');

  otherPages.forEach((page) => {
    page.className = '';
  });
};

const loadHtmlPagination = () => {
  pagination.innerHTML = '';
  for (let i = 1; i <= Math.ceil(meals.length / 10); i += 1) {
    const li = document.createElement('li');
    li.innerHTML = i;
    if (i === 1) {
      li.className = 'selectedPage';
    }
    li.addEventListener('click', () => {
      unselectOtherPages();
      li.className = 'selectedPage';
      loadHtmlContent(i);
    });
    pagination.appendChild(li);
  }
};

// -------- event listeners  ------
// const commentBtn = document.querySelectorAll('.comment');

// commentBtn.forEach((button) => button.addEventListener('click', () => {
commentPopup();
// }));

window.addEventListener('DOMContentLoaded', () => {
  searchByLetter(defaultSearchLetter).then((res) => {
    meals = res.meals;
    loadHtmlContent(1);
    loadHtmlPagination();
  });
});

search.addEventListener('submit', (e) => {
  e.preventDefault();
  if (searchInput.value.length === 1) {
    searchByLetter(searchInput.value).then((res) => {
      meals = res.meals;
      loadHtmlContent(1);
      loadHtmlPagination();
    });
  } else {
    searchByName(searchInput.value).then((res) => {
      meals = res.meals;
      loadHtmlContent(1);
      loadHtmlPagination();
    });
  }
  searchInput.value = '';
});
