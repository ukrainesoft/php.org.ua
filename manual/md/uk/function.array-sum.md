- [«array_splice](function.array-splice.md)
- [array_udiff_assoc »](function.array-udiff-assoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює суму значень масиву

#array_sum

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

array_sum — Обчислює суму значень масиву

### Опис

**array_sum**(array `$array`): int\|float

**array_sum()** повертає суму значень масиву.

### Список параметрів

`array`
Вхідний масив.

### Значення, що повертаються

Повертає суму значень у вигляді цілого числа або числа з плаваючою
точкою; `0`, якщо `array` порожній.

### Приклади

**Приклад #1 Приклад використання **array_sum()****

` <?php$a u003d array(2, 4, 6, 8);echo "sum(a) u003d " . array_sum($a) . "
";$b u003d array("a" u003d> 1.2, "b" u003d> 2.3, c" u003d> 3.4);echo "sum(b) u003d " . array_sum($b) . "
";?> `

Результат виконання цього прикладу:

sum(a) u003d 20
sum(b) u003d 6.9
