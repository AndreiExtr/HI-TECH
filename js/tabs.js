function openTab(event, tabId) {
  // Убираем активный класс со всех табов
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => tab.classList.remove('active'));

  // Убираем активный класс с кнопок
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));

  // Показываем выбранный таб
  document.getElementById(tabId).classList.add('active');
  
  // Делаем кнопку активной
  event.currentTarget.classList.add('active');
}
