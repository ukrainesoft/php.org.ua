- [«strncasecmp](function.strncasecmp.md)
- [strpbrk »](function.strpbrk.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Бінарно-безпечне порівняння перших n символів рядків

#strncmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strncmp — Бінарно-безпечне порівняння перших n символів рядків

### Опис

**strncmp**(string `$string1`, string `$string2`, int `$length`): int

Ця функція схожа на [strcmp()](function.strcmp.md), за винятком
того, що можна вказати максимальну кількість символів в обох
рядках, що братимуть участь у порівнянні.

Ця функція враховує регістр символів.

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

`length`
Кількість символів у порівнянні.

### Значення, що повертаються

Повертає негативне число, якщо `string1` менше `string2`,
позитивне число, якщо `string1` більше `string2`, і 0, якщо рядки
рівні.

### Приклади

**Приклад #1 **strncmp()** example**

` <?php$var1 u003d 'Hello John';$var2 u003d 'Hello Doe';if (strncmp($var1, $var2, 5) u003du003du003d 0) {    echo 'Перші 5 сим      порівнянні рядків з обліком реєстру';}?> `

### Дивіться також

- [strncasecmp()](function.strncasecmp.md) - Бінарно-безпечне
порівняння перших n символів рядків без урахування регістру
- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [substr_compare()](function.substr-compare.md) -
Бінарно-безпечне порівняння 2 рядків зі зміщенням, з урахуванням або без
обліку регістру
- [strcmp()](function.strcmp.md) - Бінарно-безпечне порівняння
рядків
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [substr()](function.substr.md) - Повертає підрядок
