- [«array_intersect_assoc](function.array-intersect-assoc.md)
- [array_intersect_uassoc »](function.array-intersect-uassoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Обчислити перетин масивів, порівнюючи ключі

#array_intersect_key

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

array_intersect_key — Обчислити перетин масивів, порівнюючи ключі

### Опис

**array_intersect_key**(array `$array`, array `...$arrays`): array

**array_intersect_key()** повертає масив, що містить усі елементи
`array`, що мають ключі, що містяться у всіх наступних параметрах.

### Список параметрів

`array`
Основний масив, що перевіряється.

`arrays`
Масив, з яким йде порівняння.

### Значення, що повертаються

Повертає асоціативний масив, що містить всі елементи `array`,
що мають ключі, що містяться у всіх інших параметрах.

### Приклади

**Приклад #1 Приклад використання **array_intersect_key()****

` <?php$array1 u003d array('blue'  u003d> 1, 'red'  u003d> 2, 'green'  u003d> 3, 'purple' u003d> 4);$array2 u003d array('green' u003d> 'blue' u003d> 6, 'yellow' u003d> 7,''yan'   u003d> 8);var_dump(array_intersect_key($array1, $array2));?> `

Результат виконання цього прикладу:

array(2) {
["blue"]u003d>
int(1)
["green"]u003d>
int(3)
}

У нашому прикладі тільки ключі ''blue'' і ''green'' містяться в обох
масивах і тому повертаються. Також зверніть увагу, що значення,
відповідні ключам ''blue'' і ''green'' різні у вихідних
масивах. Збіг все одно відбувається, тому що порівнюються тільки
ключі. Значення, що повертаються, беруться з `array`.

Два ключі пар `key u003d> value` вважаються рівними тільки якщо
`(string) $key1 u003du003du003d (string) $key2`. Іншими словами, застосовується
сувора перевірка, що означає, що строкові уявлення мають бути
однаковими.

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
- [array_intersect_ukey()](function.array-intersect-ukey.md) -
Обчислює сходження масивів, використовуючи callback-функцію для
порівняння ключів
