- [«strchr](function.strchr.md)
- [strcoll »](function.strcoll.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Бінарно-безпечне порівняння рядків

#strcmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strcmp — Бінарно-безпечне порівняння рядків

### Опис

**strcmp**(string `$string1`, string `$string2`): int

Ця функція враховує регістр символів.

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

### Значення, що повертаються

Повертає негативне число, якщо `string1` менше `string2`,
позитивне число, якщо `string1` більше `string2`, і 0, якщо рядки
рівні.

### Приклади

**Приклад #1 Приклад використання **strcmp()****

` <?php$var1 u003d "Hello";$var2 u003d "hello";if (strcmp($var1, $var2) !u003du003d 0) {    echo '$var1 не рівно $var2 при реєстро> `

### Дивіться також

- [strcasecmp()](function.strcasecmp.md) - Бінарно-безпечне
порівняння рядків без урахування регістру
- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [substr_compare()](function.substr-compare.md) -
Бінарно-безпечне порівняння 2 рядків зі зміщенням, з урахуванням або без
обліку регістру
- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [substr()](function.substr.md) - Повертає підрядок
