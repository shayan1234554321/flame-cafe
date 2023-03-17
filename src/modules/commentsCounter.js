const commentsCounter = (comment) => {
  const counter = comment.filter((comments) => typeof (comments.comment) === 'string');
  console.log(comment);
  return counter.length;
};

export default commentsCounter;