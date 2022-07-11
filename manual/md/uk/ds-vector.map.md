- [« Ds\Vector::last](ds-vector.last.md)
- [Ds\Vector::merge »](ds-vector.merge.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Повертає результат застосування callback-функції до всіх значень
вектора

# Ds\Vector::map

(PECL ds \>u003d 1.0.0)

Ds\Vector::map — Повертає результат застосування callback-функції
всім значенням вектора

### Опис

public **Ds\Vector::map**([callable](language.types.callable.md)
`$callback`): [Ds\Vector](class.ds-vector.md)

Повертає результат застосування callback-функції, переданої в
callback, до всіх значень вектора.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Аргумент типу [callable](language.types.callable.md).

Ця функція повинна повертати нове значення для кожного елемента
вектор.

### Значення, що повертаються

Результат застосування `callback` до кожного значення вектора.

> **Примітка**:
>
> Значення поточної колекції залишаться незмінними.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::map()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);print_r($vector->map(function($value) { return $value * 2; }));print_r($vector );?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Vector Object
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
)
Ds\Vector Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
