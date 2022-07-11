- [«is_numeric](function.is-numeric.md)
- [is_real »](function.is-real.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна об'єктом

#is_object

(PHP 4, PHP 5, PHP 7, PHP 8)

is_object — Перевіряє, чи є змінна об'єктом

### Опис

**is_object**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи є ця змінна об'єктом.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є об'єктом, або **`false`** в
інакше.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 7.2.0 | Тепер **is_object()** повертає **`true`** для десеріалізованих об'єктів, які не мають оголошення класу (клас **\_\_PHP_Incomplete_Class**). Раніше поверталося "false". |

### Приклади

**Приклад #1 Приклад використання **is_object()****

? }   return $obj->students;}// Створюємо новий примірник класу// і заповнюємо деякими значеннями$obj u003d new stdClass();$obj->students '''' var_dump(get_students(null));var_dump(get_students($obj));?> `

### Дивіться також

- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
