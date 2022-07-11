- [«array_udiff_assoc](function.array-udiff-assoc.md)
- [array_udiff »](function.array-udiff.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює розбіжність у масивах із додатковою перевіркою
індексів, використовуючи для порівняння значень та індексів
callback-функцію

#array_udiff_uassoc

(PHP 5, PHP 7, PHP 8)

array_udiff_uassoc — Обчислює розбіжність у масивах із додатковою
перевіркою індексів, використовуючи для порівняння значень та індексів
callback-функцію

### Опис

**array_udiff_uassoc**(
array `$array`,
array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`,
[callable](language.types.callable.md) `$key_compare_func`
): array

Обчислює розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень та індексів callback-функцію.

Зверніть увагу, що для порівняння використовуються ключі, на відміну від
[array_diff()](function.array-diff.md) та
[array_udiff()](function.array-udiff.md).

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

`key_compare_func`
Порівняння ключів (індексів) також здійснюється за допомогою
callback-функції `key_compare_func`. Це відрізняється від поведінки
[array_udiff_assoc()](function.array-udiff-assoc.md), яка
порівнює індекси за допомогою вбудованої функції.

### Значення, що повертаються

Повертає масив (array), що містить всі елементи `array`, яких немає
у якомусь із інших аргументів.

### Приклади

**Приклад #1 Приклад використання **array_udiff_uassoc()****

` <?phpclass cr {    private $priv_member; function cr($val)    {        $this->priv_member u003d$val; }   static function comp_func_cr($a, $b)    {        if ($a->priv_member u003du003du003du003d$$b->priv_member) return return ($a->priv_member > $b->priv_member)? 1:-1; }   static function comp_func_key($a, $b)    {        if ($a u003du003du003d $b) return 0; return ($a > $b)? 1:-1; }}$a u003d array("0.1" u003d> new cr(9), "0.5" u003d> new cr(12), 0 u003d> new cr(23), 1u003d> new cr(4), 2 new cr(-15),); (4), 2 u003d> new cr(-15),);$result u003d array_udiff_uassoc($a, $b, array("cr", "comp_func_cr"), array("cr", "comp_func_key")) print_r($result);?> `

Результат виконання цього прикладу:

Array
(
[0.1] u003d> cr Object
(
[priv_member:private] u003d> 9
)

[0.5] u003d> cr Object
(
[priv_member:private] u003d> 12
)

[0] u003d> cr Object
(
[priv_member:private] u003d> 23
)
)

У наведеному вище прикладі ви можете бачити, що пара `"1" u003d> new cr(4)`
є в обох масивах і тому відсутня у виведенні функції.
Пам'ятайте, що потрібно використовувати дві функції зворотного дзвінка.

### Примітки

> **Примітка**: Будь ласка, зверніть увагу, що ця функція
> обробляє лише один вимір багатовимірного масиву. Зрозуміло,
> Ви можете обробити більше одного виміру, використовуючи
> `array_udiff_uassoc($array1[0], $array2[0], "data_compare_func", "key_compare_func");`.

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
