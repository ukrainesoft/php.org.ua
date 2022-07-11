- [«array_diff_key](function.array-diff-key.md)
- [array_diff_ukey »](function.array-diff-ukey.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює розбіжність масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції

#array_diff_uassoc

(PHP 5, PHP 7, PHP 8)

array_diff_uassoc — Обчислює розбіжність масивів із додатковою
перевіркою індексу, що здійснюється за допомогою callback-функції

### Опис

**array_diff_uassoc**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$key_compare_func`): array

Порівнює `array` з `arrays` і повертає різницю. На відміну від
[array_diff()](function.array-diff.md), для порівняння використовуються
ключі.

На відміну від [array_diff_assoc()](function.array-diff-assoc.md), для
порівняння ключів використовується функція користувача, а не вбудована.

### Список параметрів

`array`
Вихідний масив

`arrays`
Масиви, з якими йде порівняння

`key_compare_func`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Повертає масив (array), що містить всі елементи `array`, яких немає
у всіх інших масивах.

### Приклади

**Приклад #1 Приклад використання **array_diff_uassoc()****

Пара `"a" u003d> "green"` існує в обох масивах і тому відсутня
у виведенні функції. Навпаки, пара `0 u003d> "red"` знаходиться у висновку
функції, тому що другий аргумент ``red'` має ключ, рівний `1`.

` <?phpfunction key_compare_func($a, $b){   if ($a u003du003du003d $b) {        return 0; }   return ($a > $b)? 1:-1;}$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a " u003d> "green", "yellow", "red");$result u003d array_diff_uassoc($array1, $array2, "key_compare_func");print_r($result);?> `

Результат виконання цього прикладу:

Array
(
[b] u003d> brown
[c] u003d> blue
[0] u003d> red
)

Рівність 2 індексів перевіряється функцією, що надається
користувачем.

### Примітки

> **Примітка**:
>
> Ця функція обробляє лише один вимір n-розмірного масиву.
> Звичайно, ви можете обробляти і більш глибокі рівні
> вкладеності, наприклад, використовуючи
> `array_diff_uassoc($array1[0], $array2[0], "key_compare_func");`.

### Дивіться також

- [array_diff()](function.array-diff.md) - Обчислити розбіжність
масивів
- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
- [array_udiff()](function.array-udiff.md) - Розраховує розбіжність
масивів, використовуючи для порівняння callback-функцію
- [array_udiff_assoc()](function.array-udiff-assoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_udiff_uassoc()](function.array-udiff-uassoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень та індексів callback-функцію
- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
- [array_uintersect()](function.array-uintersect.md) - Обчислює
перетин масивів, використовуючи для порівняння значень
callback-функцію
- [array_uintersect_assoc()](function.array-uintersect-assoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_uintersect_uassoc()](function.array-uintersect-uassoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції
