- [«array_combine](function.array-combine.md)
- [array_diff_assoc »](function.array-diff-assoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- підраховує кількість усіх значень масиву

#array_count_values

(PHP 4, PHP 5, PHP 7, PHP 8)

array_count_values — Підраховує кількість усіх значень масиву

### Опис

**array_count_values**(array `$array`): array

Функція **array_count_values()** повертає масив, ключами якого
є значення масиву `array`, а значеннями – кількість повторень
значень `array`.

### Список параметрів

`array`
Масив підрахованих значень

### Значення, що повертаються

Повертає асоціативний масив зі значеннями `array` як ключі
та їх кількості як значень.

### Помилки

Генерує помилку рівня **`E_WARNING`** для кожного елемента, не
що є рядком (string) або цілим числом (int).

### Приклади

**Приклад #1 Приклад використання **array_count_values()****

` <?php$array u003d array(1, "hello", 1, "world", "hello");print_r(array_count_values($array));?> `

Результат виконання цього прикладу:

Array
(
[1] u003d> 2
[hello] u003d> 2
[Світ] u003d> 1
)

### Дивіться також

- [count()](function.count.md) - Підраховує кількість елементів
масиву або Countable об'єкті
- [array_unique()](function.array-unique.md) - Забирає повторювані
значення з масиву
- [array_values()](function.array-values.md) - Вибирає всі значення
масиву
- [count_chars()](function.count-chars.md) - Повертає інформацію про
символи, що входять до рядка
