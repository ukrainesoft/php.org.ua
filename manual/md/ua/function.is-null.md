- [«is_long](function.is-long.md)
- [is_numeric »](function.is-numeric.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи значення змінної дорівнює null

#is_null

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

is_null — Перевіряє, чи значення змінної дорівнює **`null`**

### Опис

**is_null**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи значення даної змінної дорівнює **`null`**.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо значення `value` дорівнює null, або **`false`**
в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **is_null()****

` <?phperror_reporting(E_ALL);$foo u003d NULL;var_dump(is_null($inexistent), is_null($foo));?> `

Notice: Undefined variable: inexistent in ...
bool(true)
bool(true)

### Дивіться також

- Тип
[**`null`**](language.types.null.md#language.types.null.syntax)
- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_numeric()](function.is-numeric.md) - Перевіряє, чи є
змінна числом або рядком, що містить число
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
