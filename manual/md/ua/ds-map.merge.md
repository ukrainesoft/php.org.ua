- [«Ds\Map::map](ds-map.map.md)
- [Ds\Map::pairs »](ds-map.pairs.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- Повертає результат додавання всіх заданих елементів до колекції

# Ds\Map::merge

(PECL ds \>u003d 1.0.0)

Ds\Map::merge — Повертає результат додавання всіх заданих елементів
у колекцію

### Опис

public
**Ds\Map::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Map](class.ds-map.md)

Повертає результат додавання всіх ключів переданого об'єкту класу
[traversable](class.traversable.md) або масиву (array) з
відповідними значеннями у поточну колекцію.

> **Примітка**:
>
> Значення поточної колекції буде перезаписано, якщо передані ключі
> вже є.

### Список параметрів

`values`
Об'єкт класу [traversable](class.traversable.md) або array.

### Значення, що повертаються

Повертає результат додавання всіх ключів переданого об'єкту класу
[traversable](class.traversable.md) або масиву з відповідними
значеннями у поточну колекцію

> **Примітка**:
>
> Поточний екземпляр колекції залишиться недоторканим.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::merge()****

` <?php$map u003d new \Ds\Map(["a" u003d> 1, "b" u003d> 2, c" u003d> 3]);print_r($map->merge(["a" u003d > 10, "e" u003d> 50]));?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Map Object
(
[0] u003d> Ds\Pair Object
(
[key] u003d> a
[value] u003d> 10
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

[3] u003d> Ds\Pair Object
(
[key] u003d> e
[value] u003d> 50
)

)
