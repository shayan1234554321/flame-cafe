const handleItemsCount = (array) => {
  let count = 0;
  array.forEach(() => {
    count += 1;
  });
  return count;
};

export default handleItemsCount;