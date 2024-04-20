let button = document.querySelector('.new_set_button');
let hint = document.querySelector('.hint');

button.addEventListener('click', function(event) {//При клике на кнопку
  hint.classList.add('show'); //Покажем блок
});
