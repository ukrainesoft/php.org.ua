- [«strcmp](function.strcmp.md)
- [strcspn »](function.strcspn.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Порівняння рядків з урахуванням поточної локалі

#strcoll

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

strcoll — Порівняння рядків з урахуванням поточної локалі

### Опис

**strcoll**(string `$string1`, string `$string2`): int

Зверніть увагу, що ця функція враховує регістр символів і в
на відміну від [strcmp()](function.strcmp.md), не є безпечною для обробки
даних у двійковій формі.

**strcoll()** у порівнянні використовує установки поточної локалі. Якщо
встановлено локаль C або POSIX, ця функція аналогічна
[strcmp()](function.strcmp.md).

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

### Значення, що повертаються

Повертає негативне число, якщо `string1` менше `string2`,
позитивне число, якщо `string1` більше `string2`, і 0, якщо вони
рівні.

### Дивіться також

- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [strcmp()](function.strcmp.md) - Бінарно-безпечне порівняння
рядків
- [strcasecmp()](function.strcasecmp.md) - Бінарно-безпечне
порівняння рядків без урахування регістру
- [substr()](function.substr.md) - Повертає підрядок
- [stristr()](function.stristr.md) - Реєстронезалежний варіант
функції strstr
- [strncasecmp()](function.strncasecmp.md) - Бінарно-безпечне
порівняння перших n символів рядків без урахування регістру
- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [setlocale()](function.setlocale.md) - Встановлює налаштування
локалі
