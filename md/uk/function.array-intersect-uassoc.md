- [«array_intersect_key](function.array-intersect-key.md)
- [array_intersect_ukey »](function.array-intersect-ukey.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює сходження масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції

#array_intersect_uassoc

(PHP 5, PHP 7, PHP 8)

array_intersect_uassoc — Обчислює сходження масивів із додатковою
перевіркою індексу, що здійснюється за допомогою callback-функції

### Опис

**array_intersect_uassoc**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$key_compare_func`): array

**array_intersect_uassoc()** повертає масив, що містить значення
`array`, що містяться у всіх наступних параметрах. Зверніть увагу,
що на відміну від [array_intersect()](function.array-intersect.md), для
порівняння використовуються ключі.

### Список параметрів

`array`
Початковий порівнюваний масив

`arrays`
Масиви, з якими порівнюються ключі.

`key_compare_func`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Повертає всі елементи `array`, значення яких існують у всіх
аргументи.

### Приклади

**Приклад #1 Приклад використання **array_intersect_uassoc()****

` <?php$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a" u003d > "GREEN", "B" u003d> "brown", "yellow", "red");print_r(array_intersect_uassoc($array1,$array2, "strcasecmp"));?> `

Результат виконання цього прикладу:

Array
(
[b] u003d> brown
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
- [array_intersect_key()](function.array-intersect-key.md) -
Обчислити перетин масивів, порівнюючи ключі
- [array_intersect_ukey()](function.array-intersect-ukey.md) -
Обчислює сходження масивів, використовуючи callback-функцію для
порівняння ключів
