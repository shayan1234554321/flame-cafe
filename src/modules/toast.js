/* eslint-disable no-undef */
export default success = (message) => {
  console.log(message);
  swal('Good job!', `${message}`, 'success');
};