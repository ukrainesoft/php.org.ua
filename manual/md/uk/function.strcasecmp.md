- [«str_word_count](function.str-word-count.md)
- [strchr »] (function.strchr.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Бінарно-безпечне порівняння рядків без урахування регістру

#strcasecmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strcasecmp — Бінарно-безпечне порівняння рядків без урахування регістру

### Опис

**strcasecmp**(string `$string1`, string `$string2`): int

Бінарно-безпечне порівняння рядків без урахування регістру. Порівняння не
залежить від локалі; Тільки літери ASCII порівнюються без урахування регістру.

### Список параметрів

`string1`
Перший рядок

`string2`
Другий рядок

### Значення, що повертаються

Повертає негативне число, якщо `string1` менше `string2`,
позитивне число, якщо `string1` більше `string2`, і 0, якщо рядки
рівні.

### Приклади

**Приклад #1 Приклад використання **strcasecmp()****

` <?php$var1 u003d "Hello";$var2 u003d "hello";if (strcasecmp($var1, $var2) u003du003d 0) {    echo '$var1 рівно $var2 при порівнянні'; `

### Дивіться також

- [strcmp()](function.strcmp.md) - Бінарно-безпечне порівняння
рядків
- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [substr_compare()](function.substr-compare.md) -
Бінарно-безпечне порівняння 2 рядків зі зміщенням, з урахуванням або без
обліку регістру
- [strncasecmp()](function.strncasecmp.md) - Бінарно-безпечне
порівняння перших n символів рядків без урахування регістру
- [stristr()](function.stristr.md) - Реєстронезалежний варіант
функції strstr
- [substr()](function.substr.md) - Повертає підрядок
