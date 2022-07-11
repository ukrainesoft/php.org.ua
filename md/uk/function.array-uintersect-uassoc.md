- [«array_uintersect_assoc](function.array-uintersect-assoc.md)
- [array_uintersect »](function.array-uintersect.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції

#array_uintersect_uassoc

(PHP 5, PHP 7, PHP 8)

array_uintersect_uassoc — Обчислює перетин масивів з
додатковою перевіркою індексу, використовуючи для порівняння індексів та
значень індивідуальні callback-функції

### Опис

**array_uintersect_uassoc**(
array `$array1`,
array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`,
[callable](language.types.callable.md) `$key_compare_func`
): array

Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння ключів та значень різні callback-функції. То
Існують значення порівнюються однією callback-функцією, а індекси інший.

### Список параметрів

`array1`
Перший масив.

`arrays`
Додаткові масиви.

`value_compare_func`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

`key_compare_func`
Callback-функція для порівняння ключів.

### Значення, що повертаються

Повертає масив, що містить всі елементи `array1`, які існують
у решті аргументів.

### Приклади

**Приклад #1 Приклад використання **array_uintersect_uassoc()****

` <?php$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a" u003d > "GREEN", "B" u003d> "brown", "yellow", "red");print_r(array_uintersect_uassoc($array1, $array2, "strcasecmp", "strcasecmp"));?> `

Результат виконання цього прикладу:

Array
(
[a] u003d> green
[b] u003d> brown
)

### Дивіться також

- [array_uintersect()](function.array-uintersect.md) - Обчислює
перетин масивів, використовуючи для порівняння значень
callback-функцію
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
- [array_intersect_uassoc()](function.array-intersect-uassoc.md) -
Обчислює сходження масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_uintersect_assoc()](function.array-uintersect-assoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
