- [« Ds\Map::clear](ds-map.clear.md)
- [Ds\Map::copy »](ds-map.copy.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Створює новий екземпляр

# Ds\Map::\_\_construct

(PECL ds \>u003d 1.0.0)

Ds\Map::\_\_construct — Створює новий екземпляр

### Опис

public
**Ds\Map::\_\_construct**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`)

Створює новий екземпляр, використовуючи або об'єкт, що реалізує
[traversable](class.traversable.md), або масив, переданий в
як параметр `values`.

### Список параметрів

`values`
Об'єкт, що реалізує інтерфейс traversable або масив.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::\_\_construct()****

` <?php$map u003d new \Ds\Map();var_dump($map);$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, "c" u003d> 3]); var_dump($map);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Map)#1 (0) {
}
object(Ds\Map)#2 (3) {
[0]u003d>
object(Ds\Pair)#1 (2) {
["key"]u003d>
string(1) "a"
["value"]u003d>
int(1)
}
[1]u003d>
object(Ds\Pair)#3 (2) {
["key"]u003d>
string(1) "b"
["value"]u003d>
int(2)
}
[2]u003d>
object(Ds\Pair)#4 (2) {
["key"]u003d>
string(1) "c"
["value"]u003d>
int(3)
}
}
