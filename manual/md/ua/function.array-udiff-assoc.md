- [«array_sum](function.array-sum.md)
- [array_udiff_uassoc »](function.array-udiff-uassoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює розбіжність у масивах із додатковою перевіркою
індексів, використовуючи для порівняння значень callback-функцію

#array_udiff_assoc

(PHP 5, PHP 7, PHP 8)

array_udiff_assoc — Обчислює розбіжність у масивах із додатковою
перевіркою індексів, використовуючи для порівняння значень callback-функцію

### Опис

**array_udiff_assoc**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`): array

Обчислює розбіжність масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію.

> **Примітка**: Будь ласка, зверніть увагу, що ця функція
> обробляє лише один вимір багатовимірного масиву. Зрозуміло,
> Ви можете обробити більше одного виміру, використовуючи, наприклад,
> `array_udiff_assoc($array1[0], $array2[0], "some_comparison_func");`.

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

**array_udiff_assoc()** повертає масив (array), що містить усі
елементи `array`, яких немає у якомусь із решти аргументів.
Зверніть увагу, що на відміну від
[array_diff()](function.array-diff.md) та
[array_udiff()](function.array-udiff.md) у порівнянні використовуються
ключі. Порівняння даних масиву проводиться за допомогою callback-функції,
наданою користувачем. У цьому сенсі поведінка цієї функції
відрізняється від [array_diff_assoc()](function.array-diff-assoc.md),
яка використовується вбудовану функцію для порівняння.

### Приклади

**Приклад #1 Приклад використання **array_udiff_assoc()****

` <?phpclass cr {    private $priv_member; function cr($val)    {        $this->priv_member u003d$val; }   static function comp_func_cr($a, $b)    {        if ($a->priv_member u003du003du003du003d$$b->priv_member) return return ($a->priv_member > $b->priv_member)? 1:-1; }}$a u003d array("0.1" u003d> new cr(9), "0.5" u003d> new cr(12), 0 u003d> new cr(23), 1u003d> new cr(4), 2 new cr(-15),); (4), 2 u003d> new cr(-15),);$result u003d array_udiff_assoc($a, $b, array("cr", "comp_func_cr"));print_r($result);?> `

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

У прикладі вище ви бачите, що пара `"1" u003d> new cr(4)` є в обох
масивах і тому її немає у висновку функції.

### Дивіться також

- [array_diff()](function.array-diff.md) - Обчислити розбіжність
масивів
- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
- [array_diff_uassoc()](function.array-diff-uassoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_udiff()](function.array-udiff.md) - Розраховує розбіжність
масивів, використовуючи для порівняння callback-функцію
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
