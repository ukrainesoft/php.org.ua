- [«intval](function.intval.md)
- [is_bool »](function.is-bool.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Визначає, чи є змінна масивом

#is_array

(PHP 4, PHP 5, PHP 7, PHP 8)

is_array - Визначає, чи є змінна масивом

### Опис

**is_array**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Визначає, чи є ця змінна масивом.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо змінна `value` є масивом
(array), або **`false`** інакше.

### Приклади

**Приклад #1 Перевіряє, чи є змінна масивом**

` <?php$yes u003d array('це', 'масив');echo is_array($yes) ? 'Масив' : 'Не масив';echo "
";$no u003d 'це рядок';echo is_array($no) ? 'Масив' : 'Не масив';?> `

Результат виконання цього прикладу:

Масив
Чи не масив

### Дивіться також

- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
