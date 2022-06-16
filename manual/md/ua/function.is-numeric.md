- [«is_null](function.is-null.md)
- [is_object »](function.is-object.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна числом або рядком, що містить
число

#is_numeric

(PHP 4, PHP 5, PHP 7, PHP 8)

is_numeric — Перевіряє, чи є змінна числом або рядком,
містить число

### Опис

**is_numeric**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Визначає, чи є ця змінна числом або [рядком,
містить число](language.types.numeric-strings.md).

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є числом або [рядком,
містить число](language.types.numeric-strings.md) або **`false`**
інакше.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| 8.0.0 | Рядки, що складаються з чисел, що закінчуються пробілом ('42'), тепер повертатимуть true. Раніше натомість поверталося **`false`**. |

### Приклади

**Приклад #1 Приклади використання **is_numeric()****

` <?php$tests u003d array(    "42",    1337,    0x539,    02471,    0b10100111001,    1337e0,    "0x539",    "02471",    "0b10100111001",    "1337e0",    "not numeric",    array(),    9.1, null,    '',);foreach ($tests as $element) {    if (is_numeric($element)) {        echo var_export($element, true) . " is numeric", PHP_EOL; } else {        echo var_export($element, true) . " is NOT numeric", PHP_EOL; }}?> `

Результат виконання цього прикладу:

42 - число
1337 - число
1337 - число
1337 - число
1337 - число
1337.0 – число
'0x539' - НЕ число
'02471' - число
'0b10100111001' - НЕ число
'1337e0' - число
'not numeric' - НЕ число
array (
) - НЕ число
9.1 – число
NULL - НЕ число
'' - НЕ число

**Приклад #2 Приклад використання **is_numeric()** з пробілом**

` <?php$tests u003d [    " 42",    "42 ",    " 9001", // неразрывный пробел    "9001 ", // неразрывный пробел];foreach ($tests as $element) {    if (is_numeric($element) ) {        echo var_export($element, true) . " - число", PHP_EOL; } else {        echo var_export($element, true) . " - НЕ число", PHP_EOL; }}?> `

Результат виконання цього прикладу в PHP 8:

'42' - число
'42' - число
'9001' - НЕ число
'9001' - НЕ число

Результат виконання цього прикладу в PHP 7:

'42' - число
'42' - НЕ число
'9001' - НЕ число
'9001' - НЕ число

### Дивіться також

- [Рядки, що містять числа](language.types.numeric-strings.md)
- [ctype_digit()](function.ctype-digit.md) - Перевіряє наявність
цифрових символів у рядку
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_null()](function.is-null.md) - Перевіряє, чи є значення
змінною рівним null
- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
