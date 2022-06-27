- [«array_uintersect_uassoc](function.array-uintersect-uassoc.md)
- [array_unique »](function.array-unique.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює перетин масивів, використовуючи для порівняння значень
callback-функцію

#array_uintersect

(PHP 5, PHP 7, PHP 8)

array_uintersect — Обчислює перетин масивів, використовуючи для
порівняння значень callback-функцію

### Опис

**array_uintersect**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`): array

Обчислює перетин масивів, використовуючи для порівняння значень
callback-функцію.

### Список параметрів

`array`
Перший масив.

`arrays`
Масиви для порівняння.

`value_compare_func`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Повертає масив, що містить всі елементи `array`, які існують
у решті аргументів.

### Приклади

**Приклад #1 Приклад використання **array_uintersect()****

` <?php$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a" u003d > "GREEN", "B" u003d> "brown", "yellow", "red");print_r(array_uintersect($array1, $array2, "strcasecmp"));?> `

Результат виконання цього прикладу:

Array
(
[a] u003d> green
[b] u003d> brown
[0] u003d> red
)

### Дивіться також

- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
- [array_uintersect_assoc()](function.array-uintersect-assoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_uintersect_uassoc()](function.array-uintersect-uassoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції
