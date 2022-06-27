- [«Зумовлені константи](ds.constants.md)
- [Колекція »](class.ds-collection.md)

- [PHP Manual](index.md)
- [Структури даних](book.ds.md)
- Приклади

# Приклади

**Приклад #1 Vector**

` <?php$vector u003d new \Ds\Vector();$vector->push('a');$vector->push('b', 'c');$vector[] u003d 'd'; print_r($vector);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
[3] u003d> d
)

**Приклад #2 Map**

` <?php$map u003d new \Ds\Map();$map->put('a', 1);$map->put('b', 2);$map['c'] u003d 3 ;print_r($map);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 1
)

[1] u003d> Ds\Pair Object
(
[key] u003d> b
[value] u003d> 2
)

[2] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 3
)

)
