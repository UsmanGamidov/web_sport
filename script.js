let button = document.querySelector('.new_set_button');
let hint = document.querySelector('.hint');
let count = 0;

button.addEventListener('click', function(event) {//При клике на кнопку
  if (count === 0) {
    count = 1;
    hint.classList.add('show'); //Покажем блок
  } else {
    let clone = hint.cloneNode(true); // true указывает на клонирование со всем содержимым
    hint.parentNode.appendChild(clone);
  }
});

let button_close = document.querySelector('.close');

button_close.addEventListener('click', function(event) {//При клике на кнопку
  let clonedBlock = document.querySelector('.hint:not(#originalBlock)');
  if (clonedBlock) {
    clonedBlock.style.display = 'none'; // Скрываем клонированный блок
    clonedBlock.parentNode.removeChild(clonedBlock); // Можно использовать эту строку для удаления блока из DOM
  }
});


let select_grupp_1 = document.querySelector('.grupp1');
let select_grupp_2 = document.querySelector('.grupp2');
let select_grupp_3 = document.querySelector('.grupp3');
let select_grupp_4 = document.querySelector('.grupp4');


let target_selection_2 = document.getElementById('target_selection_2');


select_grupp_1.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_2.textContent = select_grupp_1.textContent;
});

select_grupp_2.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_2.textContent = select_grupp_2.textContent;
});

select_grupp_3.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_2.textContent = select_grupp_3.textContent;
});

select_grupp_4.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_2.textContent = select_grupp_4.textContent;
});



let select_cel_1 = document.querySelector('.cel1');
let select_cel_2 = document.querySelector('.cel2');
let select_cel_3 = document.querySelector('.cel3');
let select_cel_4 = document.querySelector('.cel4');

let target_selection_1 = document.getElementById('target_selection_1');


select_cel_1.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_1.textContent = select_cel_1.textContent;
});

select_cel_2.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_1.textContent = select_cel_2.textContent;
});

select_cel_3.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_1.textContent = select_cel_3.textContent;
});

select_cel_4.addEventListener('click', function(event) {//При клике на кнопку
  target_selection_1.textContent = select_cel_4.textContent;
});
