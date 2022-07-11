- [« Ds\Map::toArray](ds-map.toarray.md)
- [Ds\Map::values »](ds-map.values.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Створює нову колекцію пар із елементів двох колекцій

# Ds\Map::union

(PECL ds \>u003d 1.0.0)

Ds\Map::union — Створює нову колекцію пар із елементів двох колекцій

### Опис

public **Ds\Map::union**([Ds\Map](class.ds-map.md) `$map`):
[Ds\Map](class.ds-map.md)

Створює нову колекцію пар, що містить пари поточної та переданої в
`map` колекцій.

`A ∪ B u003d {x: x ∈ A ∨ x ∈ B}`

> **Примітка**:
>
> У разі збігу ключів значення елементів будуть братися з
> переданої колекції.

### Список параметрів

`map`
Нова колекція для об'єднання з поточною.

### Значення, що повертаються

Нова колекція пар, що є об'єднанням поточної та переданої в
`map`.

### Також дивіться

- [» Об'єднання](https://en.wikipedia.org/wiki/Union_(set_theory)) в
Вікіпедія

### Приклади

**Приклад #1 Приклад використання **Ds\Map::union()****

` <?php$a u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);$b u003d new \Ds\Map(["b" u003d> 3, "c" u003d> 4, "d" u003d> 5]);print_r($a->union($b));?> `

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
[value] u003d> 3
)

[2] u003d> Ds\Pair Object
(
[key] u003d> c
[value] u003d> 4
)

[3] u003d> Ds\Pair Object
(
[key] u003d> d
[value] u003d> 5
)

)
