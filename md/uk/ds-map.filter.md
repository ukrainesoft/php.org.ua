- [«Ds\Map::diff](ds-map.diff.md)
- [Ds\Map::first »](ds-map.first.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Створює нову колекцію пар із елементів, вибраних за допомогою
заданої callback-функції

# Ds\Map::filter

(PECL ds \>u003d 1.0.0)

Ds\Map::filter — Створює нову колекцію пар з елементів, вибраних з
допомогою заданої callback-функції

### Опис

public **Ds\Map::filter**([callable](language.types.callable.md)
`$callback` u003d ?): [Ds\Map](class.ds-map.md)

Створює нову колекцію пар із елементів, вибраних за допомогою заданої
callback-функції.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Опціональний аргумент типу [callable](language.types.callable.md),
який повертає **`true`**, якщо пара повинна бути включена та
**`false`**, якщо ні.

Якщо callback-функція не задана, будуть включені тільки елементи,
які наводяться до логічного значення **`true`** (дивіться розділ з
[приведенням до
boolean](language.types.boolean.md#language.types.boolean.casting)).

### Значення, що повертаються

Нова колекція пар, що містить значення, для яких `callback` -функція
повернула **`true`**, або всі елементи, які при приведенні до
логічного типу стають **`true`**, якщо параметр `callback` не
заданий.

### Приклади

**Приклад #1 Приклад **Ds\Map::filter()** з використанням
callback-функції**

` <?php$map u003d new \Ds\Map(["a", "b", "c", "d", "e"]);var_dump($map->filter(function($key, $) value) {    return $key % 2 u003du003d 0;}));?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Map)#3 (3) {
[0]u003d>
object(Ds\Pair)#2 (2) {
["key"]u003d>
int(0)
["value"]u003d>
string(1) "a"
}
[1]u003d>
object(Ds\Pair)#4 (2) {
["key"]u003d>
int(2)
["value"]u003d>
string(1) "c"
}
[2]u003d>
object(Ds\Pair)#5 (2) {
["key"]u003d>
int(4)
["value"]u003d>
string(1) "e"
}
}

**Приклад #2 Приклад **Ds\Map::filter()** без callback-функції**

` <?php$map u003d new \Ds\Map(["a" u003d> 0, "b" u003d> 1, "c" u003d> true, "d" u003d> false]);var_dump($map-> filter());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Map)#2 (3) {
[0]u003d>
int(1)
[1]u003d>
string(1) "a"
[2]u003d>
bool(true)
}
