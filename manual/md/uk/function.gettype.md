- [«get_resource_type](function.get-resource-type.md)
- [intval »] (function.intval.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає тип змінної

# gettype

(PHP 4, PHP 5, PHP 7, PHP 8)

gettype — Повертає тип змінної

### Опис

**gettype**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string

Повертає тип PHP-змінної `value`. Для перевірки типу змінної
використовуйте функції `is_*`.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Можливими значеннями рядка, що повертається, є:

- ``boolean'`
- ``integer''
- ``double'' (з історичних причин у випадку типу float
повертається ``double'`, а не просто ``float'`)
- ``string'`
- ``array'`
- ``object'`
- ``resource'`
- ``resource (closed)`` з PHP 7.2.0
- ``NULL'`
- ``unknown type''

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------|
| 7.2.0 | Для закритих ресурсів тепер повертається "resource (closed)". Раніше для закритих ресурсів поверталося "unknown type". |

### Приклади

**Приклад #1 Приклад використання **gettype()****

` <?php$data u003d array(1, 1., NULL, new stdClass, 'foo');foreach ($data as $value) {   echo gettype($value), "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

integer
double
NULL
object
string

### Дивіться також

- [get_debug_type()](function.get-debug-type.md) - Повертає ім'я
типу змінної у вигляді, що підходить для налагодження
- [settype()](function.settype.md) - Задає тип змінної
- [get_class()](function.get-class.md) - Повертає ім'я класу, до
якому належить об'єкт
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_callable()](function.is-callable.md) - Перевіряє, що значення
може бути викликано як функція у поточній області видимості
- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_null()](function.is-null.md) - Перевіряє, чи є значення
змінною рівним null
- [is_numeric()](function.is-numeric.md) - Перевіряє, чи є
змінна числом або рядком, що містить число
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
- [is_resource()](function.is-resource.md) - Перевіряє, чи є
змінна ресурсом
- [is_scalar()](function.is-scalar.md) - Перевіряє, чи є
змінна скалярним значенням
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- [method_exists()](function.method-exists.md) - Перевіряє,
чи існує метод у даному класі
