- [«uksort](function.uksort.md)
- [Класи та об'єкти »](book.classobj.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Сортує масив за значеннями використовуючи користувальницьку функцію для
порівняння елементів

#úsrt

(PHP 4, PHP 5, PHP 7, PHP 8)

usort — Сортує масив за значеннями використовуючи функцію користувача
для порівняння елементів

### Опис

**usort**(array `&$array`, [callable](language.types.callable.md)
`$callback`): bool

Сортує `array` за значеннями, використовуючи надану користувачем
функцію порівняння визначення порядку.

> **Примітка**:
>
> Якщо обидва порівнювані значення еквівалентні, вони зберігають свій
> Початковий порядок. До PHP 8.0.0 їх відносний порядок
> відсортованому масиві був визначений.

> **Примітка**: Ця функція надає нові ключі елементам `array`.
> Вона видаляє всі існуючі ключі, а не просто перевпорядковує їх.

### Список параметрів

`array`
Вхідний масив.

`callback`
Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Функція завжди повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------|
| 8.0.0 | Якщо параметр callback очікує, що буде передано значення за посиланням, функція тепер видасть помилку рівня ** E_WARNING **. |

### Приклади

**Приклад #1 Приклад використання **usort()****

` <?phpfunction cmp($a, $b){    if ($a u003du003d $b) {        return 0; }   return ($a < $b) ? -1 : 1;}$a u003d array(3, 2, 5, 6, 1);usort($a, "cmp");foreach ($a as $key u003d> $value) { {    echo "$key: $value
";}?> `

Результат виконання цього прикладу:

0: 1
1: 2
2: 3
3: 5
4: 6

Для ще більшого спрощення внутрішнього порівняння можна використовувати
оператор spaceship (космічний корабель).

` <?phpfunction cmp($a, $b){    return $a <u003d>$$;}$a u003d array(3, 2, 5, 6, 1);usort($a, "cmp");foreach ($a as $key u003d> $value) {    echo "$key: $value
";}?> `

> **Примітка**:
>
> Очевидно, що для цього тривіального випадку найбільше підходить функція
> [sort()](function.sort.md).

**Приклад #2 Приклад використання функції **usort()** з багатовимірними
масивами**

` <?phpfunction cmp($a, $b){    return strcmp($a["fruit"], $b["fruit"]);}$fruits[0]["fruit"] u003d "lemons";$ fruits[1]["fruit"] u003d "apples";$fruits[2]["fruit"] u003d "grapes";usort($fruits, "cmp");foreach ($fruits as $key u003d> $value ) {    echo "\$fruits[$key]: " . $value["fruit"] . "
";}?> `

При сортуванні багатовимірного масиву змінні `$a` та `$b` містять
посилання на перші два індекси масиву.

Результат виконання цього прикладу:

$fruits[0]: apples
$fruits[1]: grapes
$fruits[2]: lemons

**Приклад #3 Приклад використання **usort()** з методом класу**

`<?phpclass TestObj {    private string $name; function __construct($name)    {        $this->name u003d $name; }   /* This is the static comparing function: */   static function cmp_obj($a, $b)     {| | }}$a[] u003d new TestObj("c");$a[] u003d new TestObj("b");$a[] u003d new TestObj("d");usort($a, [TestObj:: class, "cmp_obj"]);foreach ($a as $item) {    echo $item->name . "
";}?> `

Результат виконання цього прикладу:

b
c
d

**Приклад #4 Приклад використання функції **usort()** із застосуванням
[анонімної функції](functions.anonymous.md) для сортування
багатовимірного масиву**

` <?php$array[0] u003d array('key_a' u003d> 'z', 'key_b' u003d> 'c');$array[1] u003d array('key_a' u003d> 'x', 'key_b ' u003d> 'b');$array[2] u003d array('key_a' u003d> 'y', 'key_b' u003d> 'a');function build_sorter($key) {    return function ($a, ) use ($key) {         return strnatcmp($a[$key], $b[$key]); };} usort($array, build_sorter('key_b'));foreach ($array as $item) {    echo $item['key_a'] . ', ' . $item['key_b'] . "
";}?> `

Результат виконання цього прикладу:

y, a
x, b
z, c

**Приклад #5 Приклад використання **usort()** з оператором spaceship
(космічний корабель)**

Оператор spaceship (космічний корабель) дозволяє прямолінійно
порівнювати складові значення з кількох осях. У наступному прикладі
`$people` сортується на прізвище, а потім на ім'я, якщо прізвище
збігається.

` <?php$people[0] u003d ['first' u003d> 'Adam', 'last' u003d> 'West'];$people[1] u003d ['first' u003d> 'Alec', 'last' u003d > 'Baldwin'];$people[2] u003d ['first' u003d> 'Adam', 'last' u003d> 'Baldwin'];function sorter(array $a, array $b) {    return last'], $a['first']] <u003d> [$b['last'], $b['first']];}usort($people, 'sorter');foreach ($people as $ person) {    print $person['last'] . ', ' . $person['first'] . PHP_EOL;}?> `

Результат виконання цього прикладу:

Baldwin, Adam
Baldwin, Alec
West, Adam

### Дивіться також

- [uasort()](function.uasort.md) - Сортує масив, використовуючи
користувальницьку функцію для порівняння елементів із збереженням
ключів
- [uksort()](function.uksort.md) - Сортує масив за ключами,
використовуючи функцію користувача для порівняння ключів
- [Порівняння функцій сортування масивів](array.sorting.md)
