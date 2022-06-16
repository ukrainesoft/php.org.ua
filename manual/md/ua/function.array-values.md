- [«array_unshift](function.array-unshift.md)
- [array_walk_recursive »](function.array-walk-recursive.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Вибирає всі значення масиву

#array_values

(PHP 4, PHP 5, PHP 7, PHP 8)

array_values — Вибирає всі значення масиву

### Опис

**array_values**(array `$array`): array

**array_values()** повертає масив з усіма елементами масиву
`array`. Вона також заново індексує масив, що повертається, числовими.
індексами.

### Список параметрів

`array`
Масив.

### Значення, що повертаються

Повертає індексований масив значень.

### Приклади

**Приклад #1 Приклад використання **array_values()****

` <?php$array u003d array("size" u003d> "XL", "color" u003d> "gold");print_r(array_values($array));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> XL
[1] u003d> gold
)

### Дивіться також

- [array_keys()](function.array-keys.md) - Повертає всі або
деяке підмножина ключів масиву
- [array_combine()](function.array-combine.md) - Створює новий
масив, використовуючи один масив як ключі, а інший для нього
значень
