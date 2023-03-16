import foodImg from '../assets/food.png';
import closeBtnImg from '../assets/close-btn.png';

const commentPopup = () => {
  const popupSection = document.querySelector('.popup');

  popupSection.innerHTML = `
  <div class="popup-card">
    <div class="meal-image"><img src=${foodImg}></div>
    <img src=${closeBtnImg} id="closeBtn">
    <h2>Bakewell tart</h2>
    <p class="food-name">DESERT</p>
    <p class="food-ingredients"><span>Tart</span><span>Baking</span><span>Meat</span></p>
    <button>Visit site</button><button>Watch Youtube Video</button>
    <div class="comments-and-form-container">
      <div class="comment-section">
        <p class="comment">Comments (23)</p>
        <div class="comments-and-username">
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
          <p>03/11/2023 Shayan: Really Delicius</p>
        </div>
      </div>
      <div class="form-section">
        <p>Add a comment</p>
        <form id="addCommentForm">
          <input type="text" placeholder="Your name" id="userName">
          <textarea name="comment" form="addCommentForm" id="commentText" cols="30" rows="3" maxlength="500">Your insights...</textarea>
          <button type="submit" id="submitBtn">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
  `;

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('active');
    nav.classList.remove('active');
    popupSection.style.display = 'none';
  });
};

export default commentPopup;