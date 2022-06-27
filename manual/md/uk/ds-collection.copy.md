- [« Ds\Collection::clear](ds-collection.clear.md)
- [Ds\Collection::isEmpty »](ds-collection.isempty.md)

- [PHP Manual](index.md)
- [Колекція](class.ds-collection.md)
- Повертає копію колекції

# Ds\Collection::copy

(PECL ds \>u003d 1.0.0)

Ds\Collection::copy — Повертає копію колекції

### Опис

abstract public **Ds\Collection::copy**():
[Ds\Collection](class.ds-collection.md)

Повертає копію колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає копію колекції.

### Приклади

**Приклад #1 Приклад **Ds\Collection::copy()****

` <?php$a u003d new \Ds\Vector([1, 2, 3]);$b u003d $a->copy();$b->push(4);print_r($a);print_r( $b);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
[3] u003d> 4
)
