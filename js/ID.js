const input = document.getElementById('idNumber');

  input.addEventListener('input', function() {
    let value = input.value.replace(/\D/g, ''); // Убираем все нечисловые символы
    if (value.length > 6) {
      value = value.slice(0, 6); // Ограничиваем ввод до 6 цифр
    }

    // Форматируем строку как XX-XX-XX
    if (value.length >= 4) {
      value = value.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3');
    } else if (value.length >= 2) {
      value = value.replace(/(\d{2})(\d{2})?/, '$1-$2');
    }

    input.value = value; // Обновляем значение инпута
  });