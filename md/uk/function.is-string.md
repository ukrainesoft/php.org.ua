- [«is_scalar](function.is-scalar.md)
- [isset »] (function.isset.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінним рядком

#is_string

(PHP 4, PHP 5, PHP 7, PHP 8)

is_string — Перевіряє, чи є змінним рядком

### Опис

**is_string**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи є цей змінний рядком.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є рядком, і **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **is_string()****

` <?php$values u003d array(false, true, null, 'abc', '23', 23, '23.5', 23.5, '', ' ', '0', 0);foreach ($u$ value) {    echo "is_string(";   var_export($value);   echo ") u003d "; echo var_dump(is_string($value));}?> `

Результат виконання цього прикладу:

is_string(false) u003d bool(false)
is_string(true) u003d bool(false)
is_string(NULL) u003d bool(false)
is_string('abc') u003d bool(true)
is_string('23') u003d bool(true)
is_string(23) u003d bool(false)
is_string('23.5') u003d bool(true)
is_string(23.5) u003d bool(false)
is_string('') u003d bool(true)
is_string(' ') u003d bool(true)
is_string('0') u003d bool(true)
is_string(0) u003d bool(false)

### Дивіться також

- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
