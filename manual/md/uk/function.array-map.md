- [«array_keys](function.array-keys.md)
- [array_merge_recursive »](function.array-merge-recursive.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Застосовує callback-функцію до всіх елементів зазначених масивів

#array_map

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

array_map — Застосовує функцію callback до всіх елементів зазначених
масивів

### Опис

**array_map**(?[callable](language.types.callable.md) `$callback`,
array `$array`, array `...$arrays`): array

Функція **array_map()** повертає масив (array), що містить результати
застосування `callback`-функції до відповідного елементу `array` (і
`arrays`, якщо вказано більше масивів), що використовується як
аргументу callback-функції. Кількість параметрів, що передаються
`callback`-функції, що має збігатися з кількістю масивів, переданим
функції **array_map()**. Надлишкові вхідні масиви ігноруються. Якщо
надано недостатню кількість аргументів, викидається
[ArgumentCountError](class.argumentcounterror.md).

### Список параметрів

`callback`
[callable](language.types.callable.md), що застосовується до кожного елемента
у кожному масиві.

**`null`** може бути переданий як значення `callback` для
виконання zip операції з кількома масивами. Якщо вказано тільки
`array`, **array_map()** поверне вхідний масив.

`array`
Масив, до якого застосовується callback-функція.

`arrays`
Додаткові масиви для обробки `callback`-функцією.

### Значення, що повертаються

Повертає масив, що містить результати застосування `callback`-функції до
відповідному елементу `array` (і `arrays`, якщо вказано більше
масивів), що використовується як аргумент для callback-функції.

Повернений масив збереже ключі аргументу масиву тоді і лише
тоді, коли буде передано рівно один масив. Якщо передано більше одного
масиву, повернутий масив матиме послідовні цілочисленні
ключі.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------|
| 8.0.0 | Якщо параметр callback очікує, що буде передано значення за посиланням, функція тепер видасть помилку рівня ** E_WARNING **. |

### Приклади

**Приклад #1 Приклад використання **array_map()****

` <?phpfunction cube($n){   return ($n * $n * $n);}$a u003d [1, 2, 3, 4, 5];$b u003d array_map('cube', $a) ;print_r($b);?> `

В результаті змінна `$b` міститиме:

Array
(
[0] u003d> 1
[1] u003d> 8
[2] u003d> 27
[3] u003d> 64
[4] u003d> 125
)

**Приклад #2 Використання **array_map()** разом з лямбда-функцією**

` <?php$func u003d function(int $value): int {   return $value * 2;};print_r(array_map($func, range(1, 5)));// Або с P0 (array_map(fn($value): int u003d> $value * 2, range(1, 5)));?> `

Array
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
[3] u003d> 8
[4] u003d> 10
)

**Приклад #3 Приклад використання **array_map()**: обробка кількох
масивів**

` <?phpfunction show_Spanish(int $n, string $m): string{    return "Число {$n} по-іспанськи - {$m}";}function map_Spanish(int $n, string     [$n u003d> $m];}$a u003d [1, 2, 3, 4, 5];$b u003d ['uno', 'dos', 'tres', 'cuatro', 'cinco']; $c u003d array_map('show_Spanish', $a, $b);print_r($c);$d u003d array_map('map_Spanish', $a , $b);print_r($d);?> `

Результат виконання цього прикладу:

// Висновок $c
Array
(
[0] u003d> Число 1 іспанською - uno
[1] u003d> Число 2 іспанською - dos
[2] u003d> Число 3 іспанською - tres
[3] u003d> Число 4 іспанською - cuatro
[4] u003d> Число 5 іспанською - cinco
)

// Висновок $d
Array
(
[0] u003d> Array
(
[1] u003d> uno
)

[1] u003d> Array
(
[2] u003d> dos
)

[2] u003d> Array
(
[3] u003d> tres
)

[3] u003d> Array
(
[4] u003d> cuatro
)

[4] u003d> Array
(
[5] u003d> cinco
)

)

Зазвичай при обробці двох або більше масивів вони мають однакову
довжину, так як callback-функція застосовується паралельно до
відповідним елементам масивів. Якщо масиви мають різну довжину,
більш короткі їх доповнюється елементами з порожніми значеннями до
довжини найдовшого масиву.

Цікавим ефектом при використанні цієї функції є створення
масиву масивів, що може бути досягнуто шляхом використання значення
**`null`** як ім'я callback-функції.

**Приклад #4 Виконання zip операції з масивами**

` <?php$a u003d [1, 2, 3, 4, 5];$b u003d ['one', 'two', 'three', 'four', 'five'];$c u003d ['uno ', 'dos', 'tres', 'cuatro', 'cinco'];$d u003d array_map(null, $a, $b, $c);print_r($d);?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> Array
(
[0] u003d> 1
[1] u003d> один
[2] u003d> uno
)

[1] u003d> Array
(
[0] u003d> 2
[1] u003d> two
[2] u003d> dos
)

[2] u003d> Array
(
[0] u003d> 3
[1] u003d> three
[2] u003d> tres
)

[3] u003d> Array
(
[0] u003d> 4
[1] u003d> four
[2] u003d> cuatro
)

[4] u003d> Array
(
[0] u003d> 5
[1] u003d> five
[2] u003d> cinco
)

)

**Приклад #5 **`null`** `callback` тільки з `array`**

` <?php$array u003d [1, 2, 3];var_dump(array_map(null, $array));?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}

**Приклад #6 Використання **array_map()** з рядковими ключами**

` <?php$arr u003d ['stringkey' u003d> 'value'];function cb1($a) {   return [$a];}function cb2($a, $b) {    return $ ;}var_dump(array_map('cb1', $arr));var_dump(array_map('cb2', $arr, $arr));var_dump(array_map(null, $arr));var_dump(array_map(null, $ar , $arr));?> `

Результат виконання цього прикладу:

array(1) {
["stringkey"]u003d>
array(1) {
[0]u003d>
string(5) "value"
}
}
array(1) {
[0]u003d>
array(2) {
[0]u003d>
string(5) "value"
[1]u003d>
string(5) "value"
}
}
array(1) {
["stringkey"]u003d>
string(5) "value"
}
array(1) {
[0]u003d>
array(2) {
[0]u003d>
string(5) "value"
[1]u003d>
string(5) "value"
}
}

**Приклад #7 **array_map()** - асоціативні масиви**

Хоча **array_map()** безпосередньо не підтримує використання ключа
масиву як вхідні дані, це можна змоделювати за допомогою
[array_keys()](function.array-keys.md).

` <?php$arr u003d [   'v1' u003d> 'Перший випуск',   'v2' u003d> 'Другий випуск',   'v3' u003d> 'Третій випуск'   | цього використовуйте більш довший синтаксис для анонімних функцій.$callback u003d fn(string $k, string $v): string u003d> "$k - це $v";$result u003d array ($arr));var_dump($result);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(24) "v1 - це Перший випуск"
[1]u003d>
string(25) "v2 - це другий випуск"
[2]u003d>
string(24) "v3 - це третій випуск"
}

### Дивіться також

- [array_filter()](function.array-filter.md) - Фільтрує елементи
масиву за допомогою callback-функції
- [array_reduce()](function.array-reduce.md) - Ітеративно зменшує
масив до єдиного значення, використовуючи callback-функцію
- [array_walk()](function.array-walk.md) - Застосовує задану
користувачем функцію до кожного елементу масиву
