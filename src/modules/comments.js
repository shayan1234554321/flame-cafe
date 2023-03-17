import { giveComment, getComment } from './API.js';
import commentsCounter from './commentsCounter.js';

const postComment = (id) => {
  const form = document.getElementById('addCommentForm');
  const userName = document.getElementById('userName');
  const comment = document.getElementById('commentText');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    giveComment(id, userName.value, comment.value);
    const commentDisplay = document.querySelector('.comments-and-username');
    const p = document.createElement('p');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    p.innerHTML = ` ${formattedDate} ${userName.value} ${comment.value} `;
    commentDisplay.appendChild(p);
    userName.value = '';
    comment.value = '';
  });
};

const loadComments = async (id) => {
  const res = await getComment(id);
  const commentDisplay = document.querySelector('.comments-and-username');

  if (res.length > 0) {
    const counter = commentsCounter(res);
    commentDisplay.innerHTML = res.map((comments) => ((typeof (comments.comment) === 'string' && comments.comment.length > 0) ? `<p> ${comments.creation_date} ${comments.username} : ${comments.comment}</p>` : '')).join('');
    const commentCounter = document.getElementById('commentId');
    commentCounter.innerHTML = `Comments ( ${counter} )`;
  }
};

export { postComment, loadComments };