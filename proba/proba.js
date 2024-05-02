document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("container");
  var addBlockBtn = document.getElementById("addBlockBtn");
  var existingBlock = document.getElementById("existingBlock");

  addBlockBtn.addEventListener("click", function() {
    var newBlock = existingBlock.cloneNode(true); // Клонирование блока
    container.appendChild(newBlock); // Добавление клонированного блока в контейнер
  });document.addEventListener("DOMContentLoaded", function() {
    // Находим все кнопки "Добавить блок"
    var addBlockButtons = document.querySelectorAll('.add-block-btn');
    
    // Для каждой кнопки "Добавить блок"
    addBlockButtons.forEach(function(button) {
      // Навешиваем обработчик события на клик
      button.addEventListener('click', function() {
        // Находим контейнер блока
        var block = this.closest('.block');
        // Клонируем содержимое блока
        var clonedContent = block.querySelector('.content').cloneNode(true);
        // Добавляем клонированное содержимое после текущего блока
        block.insertAdjacentElement('afterend', clonedContent);
      });
    });
  });
  
});
