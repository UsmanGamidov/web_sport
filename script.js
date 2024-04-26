let button = document.querySelector('.new_set_button');
let hint = document.querySelector('.hint');
let count = 0;
let blockCount = 0;
let block_set_count = 0;

// для создание нового сета
function cloneBlock() {
  blockCount++;
  // Найти скрытый блок, который нужно склонировать
  var originalBlock = document.getElementById('container');

  // Показать скрытый блок
  originalBlock.classList.remove('hidden');

  // Клонировать блок
  var clonedBlock = originalBlock.cloneNode(true);

  // Скрыть оригинальный блок после клонирования
  originalBlock.classList.add('hidden');

  clonedBlock.classList.add('show' + blockCount);

  clonedBlock.id = 'show' + blockCount;

  // Добавить клонированный блок после оригинала
  originalBlock.parentNode.insertBefore(clonedBlock, originalBlock.nextSibling);
}

function removeBlock(button) {
  const block = button.parentNode;
  block.parentNode.removeChild(block);
}

// для добавление нового сета
function clone_new_set(parentId)  {
  block_set_count++;
  // for(let i=0; i < 20; i++) {
    let hintElement = parentId.closest(".show" + _.range(10));

    // if (hintElement === '[object HTMLDivElement]') {
    //   break;  
    // }
  // }

  document.write(hintElement);
  
  // Находим родительский блок
  var parentBlock = document.getElementById(parent_class);

  // Находим блок, который нужно скопировать
  var originalBlock = parentBlock.querySelector('.hidden_set');

  // Клонируем блок
  var clonedBlock = originalBlock.cloneNode(true);
  
  // Добавляем клона в родительский блок
  parentBlock.appendChild(clonedBlock);
}


let button_exercise = document.querySelector('.new_exercise_button');
button_exercise.addEventListener('click', function(event) {//При клике на кнопку
  
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
