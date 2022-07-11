- [«Ds\Map::put](ds-map.put.md)
- [Ds\Map::reduce »](ds-map.reduce.md)

- [PHP Manual](index.md)
- [Колекція пар ключ-значення](class.ds-map.md)
- пов'язує з колекцією всі пари ключ-значення з об'єкта класу
traversable або масиву

# Ds\Map::putAll

(PECL ds \>u003d 1.0.2)

Ds\Map::putAll — Зв'язує з колекцією всі пари ключ-значення з
об'єкта класу traversable або масиву

### Опис

public
**Ds\Map::putAll**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$pairs`): void

Зв'язує з колекцією всі пари ключ-значення `pairs` з об'єкта класу
[traversable](class.traversable.md) або array.

> **Примітка**:
>
> Підтримуються значення типу об'єкта. Якщо об'єкт реалізує інтерфейс
> **Ds\Hashable**, перевірка здійснюється шляхом виклику методу об'єкта
> `equals`. Якщо об'єкт не реалізує інтерфейс **Ds\Hashable**, об'єкти
> повинні посилатися на той самий екземпляр класу.

### Список параметрів

`pairs`
Об'єкт класу [traversable](class.traversable.md) або array.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Map::putAll()****

` <?php$map u003d new \Ds\Map();$map->putAll([    "a" u003d> 1,    "b" u003d> 2,    "c" u003d> 3,]);print_r($ );?> `

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
