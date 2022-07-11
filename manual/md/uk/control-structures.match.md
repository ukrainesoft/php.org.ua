- [«switch](control-structures.switch.md)
- [declare »](control-structures.declare.md)

- [PHP Manual](index.md)
- [Керування конструкції](language.control-structures.md)
- match

## match

(PHP 8)

Вираз `match` призначений для розгалуження потоку виконання на
підставі перевірки збігу значення із заданою умовою. Аналогічно
оператору `switch`, вираз `match` приймає на вхід вираз,
яке порівнюється з безліччю альтернатив. Але, на відміну від
`switch`, воно обробляє значення у стилі, більше схожому на тернарний
оператор. Також, на відміну від `switch`, використовується суворе порівняння
(`u003du003du003d`), а не слабке (`u003du003d`). Вираз match доступний починаючи з PHP
8.0.0.

**Приклад #1 Структура вираження `match`**

` <?php$return_value u003d match (subject_expression) {    single_conditional_expression u003d> return_expression,    conditional_expression1, conditional_expression2 u003d> return;

**Приклад #2 Простий приклад використання `match`**

`<?php$food u003d 'cake';$return_value u003d match ($food) {   'apple' u003d> 'На столі лежать яблуко',    'banana' u003d>'  На столі стоїть торт, var_dump ($ return_value);

Результат виконання цього прикладу:

string(35) "На столі стоїть торт"

> **Примітка**: Результат `match` використовувати не обов'язково.

> **Примітка**: Вираз `match` *має* завершуватися крапкою з комою
> `;`.

Вираз `match` схожий на оператор `switch` за винятком деяких
ключових відмінностей:

- На відміну від switch, `match` використовується суворе порівняння
(`u003du003du003d`).
- Вираз `match` повертає результат.
- В `match` виконується тільки одна, перша підійшла, гілка коду,
тоді як у `switch` відбувається наскрізне виконання починаючи з
підійшов умови і до першого оператора `break`, що зустрівся.
- Вираз `match` має бути вичерпним.

Також як і оператор `switch`, `match` послідовно проводить перевірки
на збіг із заданими умовами. Виконання коду умов відбувається
ліниво, тобто. код наступної умови виконується лише якщо всі
попередні перевірки провалилися. Буде виконана лише одна гілка коду,
відповідна умові, що підійшла. Приклад:

` <?php$result u003d match ($x) {    foo() u003d> ...,   $this->bar() u003d> ..., // $this->bar() не буде виконаний, () u003du003du003d $x    $this->baz u003d> beep(), // beep() буде виконаний тільки якщо$x u003du003du003d $this->baz    // etc;

Умови в `match` можуть бути множинними. В цьому випадку їх слід
розділяти комами. Множинні умови працюють за принципом
логічного АБО і, по суті, є скороченою формою для випадків,
коли кілька умов мають оброблятися ідентично.

`<?php$result u003d match ($x) {    // Множинна умова:    $a, $b, $c u003d> 5,    // Анологічно трем$                     u003d> 5,};?> `

Також можна використати шаблон `default`. Цей шаблон збігається з чим
завгодно, навіщо не знайшлося збігів раніше. Наприклад:

` <?php$expressionResult u003d match ($condition) {    1, 2 u003d> foo(),    3, 4 u003d> bar(),    default u003d> baz()

> **Примітка**: Використання декількох шаблонів default призведе до
> фатальної помилки **`E_FATAL_ERROR`**.

Вираз `match` має бути вичерпним. Якщо вираз, що перевіряється
не співпало з жодною з умов, то буде викинуто виняток
[UnhandledMatchError](class.unhandledmatcherror.md).

**Приклад #3 Приклад необробленого виразу**

` <?php$condition u003d 5;try {    match ($condition) {        1, 2 u003d> foo(),        3, 4 u003d> bar(),    };} catch (\UnhandledMatchError $e) {    var_dump($e );}?> `

Результат виконання цього прикладу:

object(UnhandledMatchError)#1 (7) {
["message":protected]u003d>
string(33) "Unhandled match value of type int"
["string":"Error":private]u003d>
string(0) ""
["code":protected]u003d>
int(0)
["file":protected]u003d>
string(9) "/in/ICgGK"
["line":protected]u003d>
int(6)
["trace":"Error":private]u003d>
array(0) {
}
["previous":"Error":private]u003d>
NULL
}

### Використання match для перевірки складних умов

Вираз `match` можна використовувати не лише для перевірки
ідентичності, але й для будь-яких виразів, що повертають логічне
значення. В цьому випадку як вхідний параметр передається
вираз `true`.

**Приклад #4 Використання match для розгалуження в залежності від входження
у діапазони цілих чисел**

` <?php$age u003d 23;$result u003d match (true) {    $age >u003d 65 u003d> 'літній',   $age >u003d 25 u003d> 'дорослий',                 default u003d> 'дитина',};var_dump($result);?> `

Результат виконання цього прикладу:

string(11) "повнолітній"

**Приклад #5 Використання match для розгалуження залежно від
вмісту рядка**

` <?php$text u003d 'Bienvenue chez nous';$result u003d match (true) {   str_contains($text, 'Welcome') || str_contains($text, 'Hello') u003d> 'en',    str_contains($text, 'Bienvenue') || str_contains($text, 'Bonjour') u003d> 'fr',    // ...};var_dump($result);?> `

Результат виконання цього прикладу:

string(2) "fr"
