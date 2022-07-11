- [«array_diff_assoc](function.array-diff-assoc.md)
- [array_diff_uassoc »](function.array-diff-uassoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює розбіжність масивів, порівнюючи ключі

#array_diff_key

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

array_diff_key — Обчислює розбіжність масивів, порівнюючи ключі

### Опис

**array_diff_key**(array `$array`, array `...$arrays`): array

Порівнює ключі `array` з ключами `arrays` та повертає різницю. Ця
функція схожа на [array_diff()](function.array-diff.md) за винятком
те, що порівнюються ключі, а чи не значення.

### Список параметрів

`array`
Вихідний масив

`array`
Масиви для порівняння

### Значення, що повертаються

Повертає масив (array), що містить всі елементи `array` з ключами,
яких немає у всіх наступних масивах.

### Приклади

**Приклад #1 Приклад використання **array_diff_key()****

Два ключі пар `key u003d> value` вважаються рівними лише тоді, коли
`(string) $key1 u003du003du003d (string) $key2`. Іншими словами, застосовується
сувора перевірка, що означає, що строкові уявлення повинні бути
однаковими.

` <?php$array1 u003d array('blue' u003d> 1, 'red' u003d> 2, 'green' u003d> 3, 'purple' u003d> 4);$array2 u003d array('green' u003d> 5, 'yellow' u003d> 7, 'cyan' u003d> 8);var_dump(array_diff_key($array1, $array2));?> `

Результат виконання цього прикладу:

array(3) {
["blue"]u003d>
int(1)
["red"]u003d>
int(2)
["purple"]u003d>
int(4)
}

` <?php$array1 u003d array('blue' u003d> 1, 'red'  u003d> 2, 'green' u003d> 3, 'purple' u003d> 4);$array2 u003d array('green' u003d> 5, 'yellow' u003d> 7, 'cyan' u003d> 8);$array3 u003d array('blue' u003d> 6, 'yellow' u003d> 7, 'mauve' u003d> 8);var_dump(array_diff_key($array1 array2, $ array3));?> `

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
> Ця функція обробляє лише один вимір n-розмірного масиву.
> Звичайно, ви можете обробляти і більш глибокі рівні
> вкладеності, наприклад, використовуючи
> `array_diff_key($array1[0], $array2[0]);`.

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
- [array_diff_ukey()](function.array-diff-ukey.md) - Обчислює
розходження масивів, використовуючи callback-функцію для порівняння
ключів
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
