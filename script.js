let button = document.querySelector('.new_set_button');
let hint = document.querySelector('.hint');
let count = 0;
let blockCount = 0;

button.addEventListener('click', function(event) {//При клике на кнопку
  // if (count === 0) {
  //   count = 1;
  //    //Покажем блок
  // } else {
  //   let clone = hint.cloneNode(true); // true указывает на клонирование со всем содержимым
  //   hint.parentNode.appendChild(clone);
  // }
  blockCount++;
  const container = document.getElementById('container');
  const block = document.createElement('div');
  block.className = 'hint';
  block.classList.add('show');
  block.classList.add('show' + blockCount);
  block.innerHTML = ` 
  <div class="hiddenn">
    <div style="display: inline-block;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.25L7.5 19.75L3 15.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 5.25L7.5 5.25L7.5 18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div style="display: inline-block;">
      <b><p>Сет на</p></b>
    </div>
    <div style="display: inline-block;">
      <input name="povrot" placeholder="4">
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8525 13.1288C12.0775 13.3537 12.0775 13.7184 11.8525 13.9433L10.315 15.48L11.8525 17.0167C12.0775 17.2417 12.0775 17.6064 11.8525 17.8313C11.6274 18.0562 11.2625 18.0562 11.0375 17.8313L9.0925 15.8873C8.86744 15.6624 8.86744 15.2977 9.0925 15.0727L11.0375 13.1288C11.2625 12.9038 11.6274 12.9038 11.8525 13.1288Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0467 4.16703C15.3541 4.24946 15.5364 4.56536 15.4539 4.87261L14.7408 7.52938C14.7012 7.677 14.6045 7.80282 14.472 7.87915C14.3395 7.95548 14.1821 7.97604 14.0344 7.93633L11.3844 7.22353C11.077 7.14087 10.8949 6.82483 10.9776 6.51765C11.0603 6.21046 11.3765 6.02846 11.6839 6.11112L13.777 6.67412L14.3407 4.5741C14.4232 4.26685 14.7393 4.0846 15.0467 4.16703Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.10381 6.8812C5.2362 6.95754 5.33283 7.08332 5.37243 7.23086L6.08559 9.88763C6.16807 10.1949 5.98573 10.5108 5.67832 10.5932C5.37091 10.6756 5.05485 10.4934 4.97238 10.1861L4.40855 8.0857L2.30701 8.64923C1.9996 8.73166 1.68354 8.54942 1.60107 8.24217C1.51859 7.93492 1.70094 7.61903 2.00834 7.53659L4.66649 6.8238C4.81411 6.78422 4.97142 6.80486 5.10381 6.8812Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.525 9.68385C15.8006 9.52481 16.1531 9.61921 16.3122 9.89471L18.2491 13.248C18.4132 13.5321 18.4997 13.8543 18.5 14.1824C18.5003 14.5104 18.4143 14.8328 18.2507 15.1172C18.0871 15.4016 17.8516 15.638 17.5678 15.8028C17.284 15.9675 16.9619 16.0549 16.6336 16.056L16.6316 16.056H9.5C9.18172 16.056 8.92371 15.7981 8.92371 15.48C8.92371 15.1619 9.18172 14.904 9.5 14.904H16.6304C16.7564 14.9035 16.88 14.8699 16.9889 14.8066C17.098 14.7433 17.1886 14.6523 17.2515 14.5429C17.3145 14.4336 17.3475 14.3096 17.3474 14.1834C17.3473 14.0572 17.314 13.9333 17.2509 13.824L15.314 10.4707C15.1549 10.1952 15.2493 9.8429 15.525 9.68385Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.10381 6.8812C5.37926 7.04059 5.47403 7.39341 5.31456 7.66871L1.7491 13.8241C1.74903 13.8242 1.74917 13.8239 1.7491 13.8241C1.68612 13.9332 1.6527 14.0574 1.65258 14.1834C1.65247 14.3096 1.68554 14.4336 1.74846 14.5429C1.81139 14.6523 1.90196 14.7433 2.01112 14.8066C2.12001 14.8698 2.24357 14.9034 2.36949 14.904H6.25836C6.57663 14.904 6.83465 15.1619 6.83465 15.48C6.83465 15.7981 6.57663 16.056 6.25836 16.056H2.36838L2.36635 16.056C2.03814 16.0549 1.716 15.9675 1.43219 15.8028C1.14838 15.638 0.912883 15.4016 0.749278 15.1172C0.585673 14.8328 0.49971 14.5104 0.500001 14.1824C0.500292 13.8544 0.586826 13.5321 0.750935 13.2481L4.31709 7.09153C4.47655 6.81622 4.82836 6.72182 5.10381 6.8812Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5645 0.251491C8.84872 0.086758 9.17145 0 9.5 0C9.82856 0 10.1513 0.0867579 10.4355 0.251491C10.7192 0.41595 10.9546 0.652295 11.1177 0.936671C11.118 0.937147 11.1183 0.937622 11.1185 0.938097L14.6829 7.09153C14.8424 7.36683 14.7474 7.71976 14.472 7.87915C14.1965 8.03853 13.8449 7.94402 13.6854 7.66871L10.1182 1.51029C10.0559 1.40143 9.96586 1.31096 9.85731 1.24804C9.74875 1.18512 9.62549 1.15199 9.5 1.15199C9.37451 1.15199 9.25125 1.18512 9.1427 1.24804C9.03414 1.31096 8.94414 1.40143 8.88181 1.51028L8.88021 1.51307L6.93522 4.86643C6.77559 5.14164 6.42297 5.23541 6.14762 5.07587C5.87226 4.91632 5.77845 4.56389 5.93807 4.28867L7.88233 0.936574C8.04549 0.652241 8.28079 0.415931 8.5645 0.251491Z" fill="black"/>
      </svg>

    </div>
  </div> 

  <hr>
  <button onclick="removeBlock(this)">Удалить</button>
  
  `;
  container.appendChild(block);
});


function removeBlock(button) {
  const block = button.parentNode;
  block.parentNode.removeChild(block);
}

// let button_close = document.querySelector('.close');

// button_close.addEventListener('click', function(event) {//При клике на кнопку
//   let clonedBlock = document.querySelector('.hint:not(#originalBlock)');
//   if (clonedBlock) {
//     clonedBlock.style.display = 'none'; // Скрываем клонированный блок
//     clonedBlock.parentNode.removeChild(clonedBlock); // Можно использовать эту строку для удаления блока из DOM
//   }
// });


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
