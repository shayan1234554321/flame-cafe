import githubImg from '../assets/github.png';
import closeBtnImg from '../assets/close-btn.png';

const commentPopup = () => {
  const popupSection = document.querySelector('.popup');

  popupSection.innerHTML = `<img src=${githubImg}><div><img src=${closeBtnImg}></div>
<div>
  <h2>Space 3</h2>
  <p><span>Fuel:titanium</span><span>Length:100</span></p>
</div>
<div>
  <h3>Comments</h3>
  <p>03/12/2023 Alex: I'd love to buy it</p>
</div>
<div>
  <h3>Add a comment</h3>
  <form id="addCommentForm">
    <input type="text" placeholder="Your name">
    <textarea name="comment" form="addCommentForm">Your insights...</textarea>
  </form>
</div>
`;
};

export default commentPopup;