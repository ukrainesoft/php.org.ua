- [« Ds\Map::filter](ds-map.filter.md)
- [Ds\Map::get »](ds-map.get.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає перший елемент колекції

# Ds\Map::first

(PECL ds \>u003d 1.0.0)

Ds\Map::first — Повертає перший елемент колекції

### Опис

public **Ds\Map::first**(): [Ds\Pair](class.ds-pair.md)

Повертає перший елемент колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перший елемент колекції.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::first()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);var_dump($map->first());?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Pair)#2 (2) {
["key"]u003d>
string(1) "a"
["value"]u003d>
int(1)
}
