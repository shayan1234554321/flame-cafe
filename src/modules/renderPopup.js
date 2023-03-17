import closeBtnImg from '../assets/close-btn.png';
import { searchById } from './API.js';
import * as commentsJs from './comments.js';

const commentPopup = async (mealId) => {
  const popupSection = document.querySelector('.popup');
  let meals = [];
  const res = await searchById(mealId);
  meals = res.meals;
  popupSection.innerHTML = `
  <div class="popup-card">
    <div class="meal-image"><img src=${meals[0].strMealThumb}></div>
    <img src=${closeBtnImg} id="closeBtn">
    <h2>${meals[0].strMeal}</h2>
    <p class="food-name">${meals[0].strCategory}</p>
    <p class="food-ingredients">
      <span>${meals[0].strIngredient1 ? meals[0].strIngredient1 : ''}</span>
      <span>${meals[0].strIngredient2 ? meals[0].strIngredient2 : ''}</span>
      <span>${meals[0].strIngredient3 ? meals[0].strIngredient3 : ''}</span>
      <span>${meals[0].strIngredient4 ? meals[0].strIngredient4 : ''}</span>
      <span>${meals[0].strIngredient5 ? meals[0].strIngredient5 : ''}</span>
    </p>
    <button>Visit site</button><button>Watch Youtube Video</button>
    <div class="comments-and-form-container">
      <div class="comment-section">
        <p class="comment" id="commentId"></p>
        <div class="comments-and-username">
        </div>
      </div>
      <div class="form-section">
        <p>Add a comment</p>
        <form id="addCommentForm">
          <input type="text" placeholder="Your name" id="userName" required>
          <textarea name="comment" form="addCommentForm" id="commentText" cols="30" rows="3" maxlength="500" placeholder="Your insights..." required ></textarea>
          <button type="submit" id="submitBtn">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>`;

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('active');
    nav.classList.remove('active');
    popupSection.style.display = 'none';
  });

  commentsJs.postComment(mealId);
  commentsJs.loadComments(mealId);
};

export default commentPopup;