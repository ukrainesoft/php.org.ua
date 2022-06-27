- [«array_slice](function.array-slice.md)
- [array_sum »](function.array-sum.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Видаляє частину масиву і замінює її чимось ще

#array_splice

(PHP 4, PHP 5, PHP 7, PHP 8)

array_splice — Видаляє частину масиву і замінює її чимось ще

### Опис

**array_splice**(
array `&$array`,
int `$offset`,
?int `$length` u003d **`null`**,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$replacement` u003d \[\]
): array

Видаляє `length` елементів, розташованих на відстані `offset` з
масиву `array`, і замінює їх елементами масиву `replacement`, якщо він
переданий як параметр.

> **Примітка**:
>
> Зверніть увагу, що числові ключі в масиві `array` не
> зберігаються.

> **Примітка**: Якщо параметр `replacement` не є масивом, він
> буде
> [перетворено](language.types.array.md#language.types.array.casting)
> до нього (тобто `(array) $parameter`). Це може призвести до
> несподіваним результатам при використанні об'єкта або **`null`**
> якість `replacement`.

### Список параметрів

`array`
Вхідний масив.

`offset`
Якщо параметр offset позитивний, будуть видалені елементи,
що знаходяться на відстані offset від початку `array`.

Якщо `offset` негативний, будуть видалені елементи, що знаходяться на
відстані offset від кінця `input`.

`length`
Якщо параметр `length` опущений, будуть видалені всі елементи, починаючи з
позиції `offset` і до кінця масиву.

Якщо `length` вказано і він позитивний, то буде видалено саме стільки
елементів.

Якщо параметр `length` негативний, то кінець частини елементів, що видаляється
відстоятиме на цю кількість від кінця масиву.

Якщо length заданий як 0, нічого видалено не буде.

**Підказка**
Порада: щоб видалити всі елементи масиву, починаючи з позиції
`offset` до кінця масиву, в той час як вказано параметр `replacement`,
використовуйте `count($input)` як параметр `length`.

`replacement`
Якщо передано масив `replacement` як аргумент, тоді видалені
елементи будуть замінені елементами масиву.

Якщо параметри `offset` та `length` такі, що з вихідного масиву не
буде нічого видалено, тоді елементи масиву `replacement` будуть
вставлені на позицію `offset`.

> **Примітка**:
>
> Зверніть увагу, що ключі масиву `replacement` не зберігаються.

Порада: якщо `replacement` є просто одним елементом, ні
необхідності укладати його в `array()` або квадратні дужки, якщо
тільки цей елемент сам не є масивом, об'єктом чи **`null`**.

### Значення, що повертаються

Повертає масив, який містить віддалені елементи.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `length` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклади використання **array_splice()****

` <?php$input u003d array("red", "green", "blue", "yellow");array_splice($input, 2);var_dump($input);$input u003d array("red", " green", "blue", "yellow");array_splice($input, 1, -1);var_dump($input);$input u003d array("red", "green", "blue", "yellow") ;array_splice($input, 1, count($input), "orange");var_dump($input);$input u003d array("red", "green", "blue", "yellow");array_splice($ input, -1, 1, array("black", "maroon"));var_dump($input);?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
string(3) "red"
[1]u003d>
string(5) "green"
}
array(2) {
[0]u003d>
string(3) "red"
[1]u003d>
string(6) "yellow"
}
array(2) {
[0]u003d>
string(3) "red"
[1]u003d>
string(6) "orange"
}
array(5) {
[0]u003d>
string(3) "red"
[1]u003d>
string(5) "green"
[2]u003d>
string(4) "blue"
[3]u003d>
string(5) "black"
[4]u003d>
string(6) "maroon"
}

**Приклад #2 Приклади використання **array_splice()****

Наступні вирази еквівалентні:

` <?php// додати два елемента в $inputarray_push($input, $x, $y);array_splice($input, count($input), 0, array($x, $y));//  видалити елемент із $inputarray_pop($input);array_splice($input, -1);// видалити перший елемент із $inputarray_shift($input);array_splice($input, 0, 1) $input, $x, $y);array_splice($input, 0, 0, array($x, $y));// замінити в $input елемент з індексом $x на значення $y$input[$x] u003d$y; // для масивів, де ключ рівний зміщенняarray_splice($input, $x, 1, $y);?> `

### Дивіться також

- [array_merge()](function.array-merge.md) - Зливає один або
більша кількість масивів
- [array_slice()](function.array-slice.md) - Вибирає зріз масиву
- [unset()](function.unset.md) - Видаляє змінну
