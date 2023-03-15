import './style.css';
import './modules/importing-images.js';
import { searchByLetter } from './modules/API.js';
import commentPopup from './modules/commentPopup.js';

// -------- constants --------------

const defaultSearchLetter = 'b';
const items = document.getElementById('items');
const pagination = document.getElementById('pagination');
let meals = [];
// -------- functions --------------

const loadHtmlContent = (pageNum) => {
  items.innerHTML = '';
  let toAdd = '';

  for (let i = pageNum * 10; i < ((pageNum + 1) * 10) + 2; i += 1) {
    toAdd += `
            <li id='${meals[i].idMeal}' >
                <img alt="Meal Image" src=' ${meals[i].strMealThumb} ' >
                <h4><b>${meals[i].strMeal}</b></h4>
                <h4>${meals[i].strCategory}</h4>
                <ul class="tags-container" >
                    <li>${meals[i].strIngredient1}</li>
                    <li>${meals[i].strIngredient2}</li>
                    ${(meals[i].strIngredient1.length + meals[i].strIngredient2.length < 15) ? `<li>${meals[i].strIngredient3}</li>` : ''}
                </ul>
                <div class="line"></div>
                <div class="interactions">
                    <label class="like">
                        <input style="display: none;" type="checkbox"/>
                        <div class="hearth"></div>
                    </label>
                    <span id="like-count" ><b>12</b></span>
                    <span> <b>Comment</b></span>
                </div>
            </li>
        `;
    if (i === meals.length) break;
  }
  items.innerHTML = toAdd;
};

const loadHtmlPagination = () => {
  let toAdd = "<li class='selected' >1</li>";
  pagination.innerHTML = '';
  for (let i = 2; i <= Math.ceil(meals.length / 10); i += 1) {
    toAdd += `<li>${i}</li>`;
  }
  pagination.innerHTML = toAdd;
};

// -------- event listeners  ------
const commentBtn = document.querySelectorAll('.comment');

commentBtn.forEach((button) => button.addEventListener('click',()=>{
    commentPopup();
}))

window.addEventListener('DOMContentLoaded', () => {
  searchByLetter(defaultSearchLetter).then((res) => {
    meals = res.meals;
    loadHtmlContent(0);
    loadHtmlPagination();
  });
});

