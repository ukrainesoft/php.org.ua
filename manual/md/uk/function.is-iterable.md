- [«is_integer](function.is-integer.md)
- [is_long »](function.is-long.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи змінна ітерується

#is_iterable

(PHP 7 \>u003d 7.1.0, PHP 8)

is_iterable — Перевіряє, чи змінна ітерована

### Опис

**is_iterable**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи відповідає вміст змінної псевдотипу
[iterable](language.types.iterable.md), тобто є вона чи
масивом (array), або об'єктом, що реалізує
[Traversable](class.traversable.md)

### Список параметрів

`value`
Змінна для перевірки

### Значення, що повертаються

Повертає **`true`**, якщо `value` ітерована або **`false`**, якщо
ні.

### Приклади

**Приклад #1 Приклад використання **is_iterable()****

`<?phpvar_dump(is_iterable([1, 2, 3]))); //bool(true)var_dump(is_iterable(newArrayIterator([1, 2, 3])))); //bool(true)var_dump(is_iterable((function ()){{yield 1; })())); //bool(true)var_dump(is_iterable(1)); //bool(false)var_dump(is_iterable(newstdClass())); //bool(false)?> `

### Дивіться також

- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
