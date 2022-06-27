- [«strnatcmp](function.strnatcmp.md)
- [strncmp »](function.strncmp.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Бінарно-безпечне порівняння перших n символів рядків без урахування
регістру

#strncasecmp

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

strncasecmp — Бінарно-безпечне порівняння перших n символів рядків без
обліку регістру

### Опис

**strncasecmp**(string `$string1`, string `$string2`, int `$length`):
int

Ця функція схожа на [strcasecmp()](function.strcasecmp.md), за
виключенням того, що можна вказати максимальну кількість символів у
обох рядках, які братимуть участь у порівнянні.

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

`length`
Кількість символів, що у порівнянні.

### Значення, що повертаються

Повертає негативне число, якщо `string1` менше `string2`,
позитивне число, якщо `string1` більше `string2`, і 0, якщо рядки
рівні.

### Приклади

**Приклад #1 Приклад використання **strncasecmp()****

`<?php$var1 u003d 'Hello John';$var2 u003d 'hello Doe';if (strncasecmp($var1, $var2, 5) u003du003du003d 0) {    echo 'Перші 5$ порівнянні рядків без обліку реєстру';}?> `

### Дивіться також

- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [substr_compare()](function.substr-compare.md) -
Бінарно-безпечне порівняння 2 рядків зі зміщенням, з урахуванням або без
обліку регістру
- [strcasecmp()](function.strcasecmp.md) - Бінарно-безпечне
порівняння рядків без урахування регістру
- [stristr()](function.stristr.md) - Реєстронезалежний варіант
функції strstr
- [substr()](function.substr.md) - Повертає підрядок
