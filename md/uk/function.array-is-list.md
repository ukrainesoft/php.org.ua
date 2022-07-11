- [«array_intersect](function.array-intersect.md)
- [array_key_exists »](function.array-key-exists.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Перевіряє, чи є цей array списком

#array_is_list

(PHP 8 \>u003d 8.1.0)

array_is_list — Перевіряє, чи є цей `array` списком

### Опис

**array_is_list**(array `$array`): bool

Визначає, чи є цей `array` списком. Масив (array) вважається
списком, якщо його ключі складаються з послідовних чисел від 0 до
`count($array)-1`.

### Список параметрів

`array`
Масив (Array) для перевірки.

### Значення, що повертаються

Повертає **`true`**, якщо `array` є списком, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **array_is_list()****

`<?phparray_is_list([]); // truearray_is_list (['apple', 2, 3]); // truearray_is_list([0 u003d> 'apple', 'orange']); // true// Масив починається не с 0array_is_list([1 u003d> 'apple', 'orange']); // false// Ключі масиву не по порядкуarray_is_list([1 u003d> 'apple', 0 u003d> 'orange']); // false// Ключі масиву не є цілими числамиarray_is_list([0 u003d> 'apple', 'foo' u003d> 'bar']); // false// Непослідовні ключіarray_is_list([0 u003d> 'apple', 2 u003d> 'bar']); // false?> `

### Примітки

> **Примітка**:
>
> Функція повертає **`true`** для порожніх масивів.

### Дивіться також

- [array_values()](function.array-values.md) - Вибирає всі значення
масиву
