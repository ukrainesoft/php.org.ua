- [«is_float](function.is-float.md)
- [is_integer »](function.is-integer.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна цілим числом

#is_int

(PHP 4, PHP 5, PHP 7, PHP 8)

is_int — Перевіряє, чи змінна є цілим числом

### Опис

**is_int**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи тип змінної є цілим.

> **Примітка**:
>
> Щоб перевірити, чи змінна є числом або рядком,
> містить число (як поле введення у формі, яке завжди є
> рядком), використовуйте [is_numeric()](function.is-numeric.md).

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є цілим числом (int), або
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **is_int()****

`<?php$values u003d array(23, "23", 23.5, "23.5", null, true, false);foreach ($values as $value) {           ") u003d "; var_dump(is_int($value));}?> `

Результат виконання цього прикладу:

is_int(23) u003d bool(true)
is_int('23') u003d bool(false)
is_int(23.5) u003d bool(false)
is_int('23.5') u003d bool(false)
is_int(NULL) u003d bool(false)
is_int(true) u003d bool(false)
is_int(false) u003d bool(false)

### Дивіться також

- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_numeric()](function.is-numeric.md) - Перевіряє, чи є
змінна числом або рядком, що містить число
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
