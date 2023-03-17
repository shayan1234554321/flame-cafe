const commentsCounter = (comment) => {
  const counter = comment.filter((comments) => (typeof (comments.comment) === 'string' && comments.comment.length > 0));
  return counter.length;
};

export default commentsCounter;