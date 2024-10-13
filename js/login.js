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
const logoutBtn = document.getElementById('logoutBtn');

// Событие при нажатии на кнопку
loginBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Останавливаем стандартное поведение кнопки

  let hasError = false;

   // Скрываем предыдущие ошибки
   requiredIdError.style.display = 'none';
   invalidError.style.display = 'none';

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
      // Сохраняем информацию о том, что пользователь вошел в систему
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Скрываем элементы окна входа
      allInputs.style.display = 'none';
      allWindows.style.display = 'none';
      loginBtn.style.display = 'none';

      // Показываем кнопку "Logout"
      logoutBtn.style.display = 'flex';
    }
  }
});

logoutBtn.addEventListener('click', function() {
  // Удаляем информацию о пользователе из localStorage
  localStorage.removeItem('loggedInUser');
  
  // Показываем окно входа снова
  allInputs.style.display = 'flex';
  allWindows.style.display = 'flex';
  loginBtn.style.display = 'flex';

  // Очищаем значения полей ввода
  idInput.value = '';
  passwordInput.value = '';

  // Скрываем кнопку "Logout"
  logoutBtn.style.display = 'none';
});


window.addEventListener('DOMContentLoaded', function() {
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
    // Если пользователь уже авторизован, скрываем окно входа
    allInputs.style.display = 'none';
    allWindows.style.display = 'none';
    loginBtn.style.display = 'none';

    // Показываем кнопку "Logout"
    logoutBtn.style.display = 'flex';
  } else {
    // Если пользователь не авторизован, показываем форму входа
    allInputs.style.display = 'flex';
    allWindows.style.display = 'flex';
    loginBtn.style.display = 'flex';

    // Скрываем кнопку "Logout"
    logoutBtn.style.display = 'none';
  }
});
