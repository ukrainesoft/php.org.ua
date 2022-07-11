- [«array_udiff](function.array-udiff.md)
- [array_uintersect_uassoc »](function.array-uintersect-uassoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію

#array_uintersect_assoc

(PHP 5, PHP 7, PHP 8)

array_uintersect_assoc — Обчислює перетин масивів із додатковою
перевіркою індексів, використовуючи для порівняння значень callback-функцію

### Опис

**array_uintersect_assoc**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`): array

Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію.

Зверніть увагу, що в порівнянні використовуються ключі, на відміну від
[array_uintersect()](function.array-uintersect.md). Значення
порівнюються за допомогою callback-функції.

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

**Приклад #1 Приклад використання **array_uintersect_assoc()****

` <?php$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a" u003d > "GREEN", "B" u003d> "brown", "yellow", "red");print_r(array_uintersect_assoc($array1, $array2, "strcasecmp"));?> `

Результат виконання цього прикладу:

Array
(
[a] u003d> green
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
- [array_uintersect_uassoc()](function.array-uintersect-uassoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції
