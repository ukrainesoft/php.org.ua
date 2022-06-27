- [«is_array](function.is-array.md)
- [is_callable »](function.is-callable.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є мінлива булева

#is_bool

(PHP 4, PHP 5, PHP 7, PHP 8)

is_bool — Перевіряє, чи є змінна булева

### Опис

**is_bool**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи є ця змінна булева.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є змінною типу bool, або
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **is_bool()****

`<?php$a u003d false;$b u003d 0;// Так як $a є булевою змінною, функція верне trueif (is_bool($a) u003du003du003d true) а а   / Так як $b не є булевою змінною, функція верне falseif (is_bool($b) u003du003du003d false) {    echo "Ні, це не ">>

### Дивіться також

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
