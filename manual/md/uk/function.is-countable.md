- [«is_callable](function.is-callable.md)
- [is_double »](function.is-double.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевірити, що вміст змінної є лічильним значенням

#is_countable

(PHP 7 \>u003d 7.3.0, PHP 8)

is_countable — Перевірити, чи є вміст змінною.
значенням

### Опис

**is_countable**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевірте, що вміст змінної масив (array) або об'єкт,
реалізує [Countable](class.countable.md)

### Список параметрів

`value`
Значення для перевірки

### Значення, що повертаються

Повертає **`true`**, якщо `value` лічильна або **`false`** у протилежному
випадку.

### Список змін

| Версія | Опис |
|--------|---------------------------------------|
| 7.3.0 | Додано функцію **is_countable()**. |

### Приклади

**Приклад #1 Приклади використання **is_countable()****

`<?phpvar_dump(is_countable([1, 2, 3])); //bool(true)var_dump(is_countable(newArrayIterator(['foo', 'bar','baz'])))); //bool(true)var_dump(is_countable(newArrayIterator())); //bool(true)var_dump(is_countable(newstdClass())); //bool(false) `

### Дивіться також

- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
- [is_iterable()](function.is-iterable.md) - Перевіряє, чи є
змінна ітерована
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
