document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("container");
  var addBlockBtn = document.getElementById("addBlockBtn");
  var existingBlock = document.getElementById("existingBlock");

  addBlockBtn.addEventListener("click", function() {
    var newBlock = existingBlock.cloneNode(true); // Клонирование блока
    container.appendChild(newBlock); // Добавление клонированного блока в контейнер
  });
});
