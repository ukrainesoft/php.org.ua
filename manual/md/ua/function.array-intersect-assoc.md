- [«array_flip](function.array-flip.md)
- [array_intersect_key »](function.array-intersect-key.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює сходження масивів з додатковою перевіркою індексу

#array_intersect_assoc

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

array_intersect_assoc — Обчислює сходження масивів із додатковою
перевіркою індексу

### Опис

**array_intersect_assoc**(array `$array`, array `...$arrays`): array

Функція **array_intersect_assoc()** повертає масив, що містить усі
значення масиву `array`, які містяться у всіх зазначених
аргументи. Зверніть увагу, що при порівнянні використовуються ключі,
на відміну від функції [array_intersect()](function.array-intersect.md).

### Список параметрів

`array`
Основний масив, що перевіряється.

`arrays`
Масиви, з якими йде порівняння.

### Значення, що повертаються

Повертає асоціативний масив, що містить усі елементи масиву
`array`, які існують у всіх переданих аргументах.

### Приклади

**Приклад #1 Приклад використання **array_intersect_assoc()****

` <?php$array1 u003d array("a" u003d> "green", "b" u003d> "brown", "c" u003d> "blue", "red");$array2 u003d array("a" u003d > "green", "b" u003d> "yellow", "blue", "red");$result_array u003d array_intersect_assoc($array1, $array2);print_r($result_array);?> `

Результат виконання цього прикладу:

Array
(
[a] u003d> green
)

У нашому прикладі видно, що тільки пара ``a'' u003d> "green"`, міститься в
обох масивах і таким чином повертається. Значення ``red'`` не
повертається, тому що в масиві `$array1` його ключ - `0`, в той час
як ключ значення "red" у масиві `$array2` - `1`, а ключ `"b"` не
повертається тому, що його значення різні у кожному масиві.

Два значення пар `key u003d> value` вважаються рівними тільки якщо
`(string) $elem1 u003du003du003d (string) $elem2`. Іншими словами, застосовується
сувора перевірка, що означає, що строкові уявлення повинні бути
однаковими.

### Дивіться також

- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_uintersect_assoc()](function.array-uintersect-assoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_intersect_uassoc()](function.array-intersect-uassoc.md) -
Обчислює сходження масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_uintersect_uassoc()](function.array-uintersect-uassoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції
- [array_diff()](function.array-diff.md) - Обчислити розбіжність
масивів
- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
