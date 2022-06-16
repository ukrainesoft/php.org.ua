- [«array_diff_uassoc](function.array-diff-uassoc.md)
- [array_diff »](function.array-diff.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Обчислює розбіжність масивів, використовуючи callback-функцію для
порівняння ключів

#array_diff_ukey

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

array_diff_ukey — Обчислює розбіжність масивів за допомогою
callback-функцію для порівняння ключів

### Опис

**array_diff_ukey**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$key_compare_func`): array

Порівнює ключі `array` з ключами `arrays` та повертає різницю. Ця
функція схожа на [array_diff()](function.array-diff.md) за
винятком те, що порівнюються ключі, а чи не значення.

На відміну від функції [array_diff_key()](function.array-diff-key.md)
для порівняння ключів використовується функція, що надається
користувачем, а не вбудована функція.

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

Повертає масив (array), що містить всі елементи `array`,
відсутні в жодному з усіх інших масивів.

### Приклади

**Приклад #1 Приклад використання **array_diff_ukey()****

` <?phpfunction key_compare_func($key1, $key2){   if ($key1 u003du003d $key2)         return 0; else if ($key1 > $key2)        return 1; else        return -1;}$array1 u003d array('blue'  u003d> 1, 'red'  u003d> 2, 'green'  u003d> 3> u003du003d' u003d' ') 5, 'blue' u003d> 6, 'yellow' u003d> 7, 'cyan'   u003d> 8);var_dump(array_diff_ukey($array1, $array2, 'key_compare_func'));?> `

Результат виконання цього прикладу:

array(2) {
["red"]u003d>
int(2)
["purple"]u003d>
int(4)
}

### Примітки

> **Примітка**:
>
> Зверніть увагу, що ця функція обробляє лише один вимір
> n-розмірного масиву. Звичайно, ви можете обробляти і більше
> глибокі рівні вкладеності, наприклад, використовуючи
> `array_diff_ukey($array1[0], $array2[0], 'callback_func');`.

### Дивіться також

- [array_diff()](function.array-diff.md) - Обчислити розбіжність
масивів
- [array_udiff()](function.array-udiff.md) - Розраховує розбіжність
масивів, використовуючи для порівняння callback-функцію
- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
- [array_diff_uassoc()](function.array-diff-uassoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_udiff_assoc()](function.array-udiff-assoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_udiff_uassoc()](function.array-udiff-uassoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень та індексів callback-функцію
- [array_diff_key()](function.array-diff-key.md) - Обчислює
розбіжність масивів, порівнюючи ключі
- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
- [array_intersect_uassoc()](function.array-intersect-uassoc.md) -
Обчислює сходження масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_intersect_key()](function.array-intersect-key.md) -
Обчислити перетин масивів, порівнюючи ключі
- [array_intersect_ukey()](function.array-intersect-ukey.md) -
Обчислює сходження масивів, використовуючи callback-функцію для
порівняння ключів
