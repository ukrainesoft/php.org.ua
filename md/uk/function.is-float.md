- [«is_double](function.is-double.md)
- [is_int »](function.is-int.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна числом із плаваючою точкою

#is_float

(PHP 4, PHP 5, PHP 7, PHP 8)

is_float — Перевіряє, чи є змінна числом із плаваючою точкою

### Опис

**is_float**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи ця змінна числом з плаваючою точкою.

> **Примітка**:
>
> Щоб перевірити, чи є змінна числом або рядком, що містить
> число (як поле введення у формі, яке завжди є рядком),
> використовуйте [is_numeric()](function.is-numeric.md).

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є змінною типу float,
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **is_float()****

` var_dump(is_float(27.25));var_dump(is_float('abc'));var_dump(is_float(23));var_dump(is_float(23.5));var_dump(is_float(1e7)); //Наукова нотаціяvar_dump(is_float(true));?>`

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)
bool(true)
bool(true)
bool(false)

### Дивіться також

- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_numeric()](function.is-numeric.md) - Перевіряє, чи є
змінна числом або рядком, що містить число
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
