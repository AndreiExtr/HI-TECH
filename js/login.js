// Данные пользователей
const users = [
  { id: "12-34-56", password: "abc12" },
  { id: "23-45-67", password: "def34" },
  { id: "34-56-78", password: "ghi56" },
  { id: "45-67-89", password: "jkl78" }
];

const allWindows = document.getElementById('window');
const allInputs = document.getElementById('inputs');
const idInput = document.getElementById('idNumber');
const passwordInput = document.getElementById('password');

const requiredIdError = document.getElementById('required');
const invalidError = document.getElementById('invalid');

const loginBtn = document.getElementById('loginBtn');

// Событие при нажатии на кнопку
loginBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Останавливаем стандартное поведение кнопки

  let hasError = false;

  // Проверка на пустое поле ID или на пустое поле пароля
  if (!idInput.value.trim()  || !passwordInput.value.trim()) {
    requiredIdError.style.display = 'flex';
    hasError = true;
  }

  // Если нет ошибок
  if (!hasError) {
    const user = users.find(user => user.id === idInput.value && user.password === passwordInput.value);
    
    if (!user) {
      requiredIdError.style.display = 'none';
      invalidError.style.display = 'flex'; // Показываем ошибку неверных данных
    } else {
      // Здесь можно выполнить переход на другую страницу или выполнить другие действия
      allInputs.style.display = 'none';
      allWindows.style.display = 'none';
      loginBtn.style.display = 'none';
    }
  }
});
