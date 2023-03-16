import { giveComment, getComment } from './API.js';

const postComment = (id) => {
  const form = document.getElementById('addCommentForm');
  const userName = document.getElementById('userName');
  const comment = document.getElementById('commentText');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    giveComment(id, userName.value, comment.value);
  });
};

const loadComments = async (id) => {
  const res = await getComment(id);
  const commentDisplay = document.querySelector('.comments-and-username');

  if (res.length > 0) {
    const counter = res.filter((comments) => typeof (comments.comment) === 'string');
    commentDisplay.innerHTML = res.map((comments) => (typeof (comments.comment) === 'string' ? `<p> ${comments.creation_date} ${comments.username} : ${comments.comment}</p>` : '')).join('');
    const commentCounter = document.getElementById('commentId');
    commentCounter.innerHTML = `Comments ( ${counter.length} )`;
  }
};

export { postComment, loadComments };