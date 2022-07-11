- [«Ds\Map::merge](ds-map.merge.md)
- [Ds\Map::put »](ds-map.put.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає послідовність, що містить усі пари колекції

# Ds\Map::pairs

(PECL ds \>u003d 1.0.0)

Ds\Map::pairs — Повертає послідовність, яка містить усі пари
колекції

### Опис

public **Ds\Map::pairs**(): [Ds\Sequence](class.ds-sequence.md)

Повертає **Ds\Sequence**, що містить усі пари колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**Ds\Sequence**, що містить усі пари вихідної колекції.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::pairs()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);var_dump($map->pairs());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Map)#8 (3) {
[0]u003d>
object(Ds\Pair)#5 (2) {
["key"]u003d>
string(1) "a"
["value"]u003d>
int(1)
}
[1]u003d>
object(Ds\Pair)#6 (2) {
["key"]u003d>
string(1) "b"
["value"]u003d>
int(2)
}
[2]u003d>
object(Ds\Pair)#7 (2) {
["key"]u003d>
string(1) "c"
["value"]u003d>
int(3)
}
}
p
