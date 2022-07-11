- [« Ds\Map::reversed](ds-map.reversed.md)
- [Ds\Map::slice »](ds-map.slice.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає пару за індексом позиції

# Ds\Map::skip

(PECL ds \>u003d 1.0.0)

Ds\Map::skip — Повертає пару за індексом позиції

### Опис

public **Ds\Map::skip**(int `$position`): [Ds\Pair](class.ds-pair.md)

Повертає пару за індексом позиції `position`, перша пара має індекс
0.

### Список параметрів

`position`
Індекс позиції.

### Значення, що повертаються

Повертає **Ds\Pair** із заданої позиції `position`.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::skip()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);var_dump($map->skip(1));? > `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Pair)#2 (2) {
["key"]u003d>
string(1) "b"
["value"]u003d>
int(2)
}
