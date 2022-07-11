- [« Ds\Sequence::last](ds-sequence.last.md)
- [Ds\Sequence::merge »](ds-sequence.merge.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає результат застосування callback-функції до всіх значень
колекції

# Ds\Sequence::map

(PECL ds \>u003d 1.0.0)

Ds\Sequence::map — Повертає результат застосування callback-функції
всім значенням колекції

### Опис

abstract public
**Ds\Sequence::map**([callable](language.types.callable.md)
`$callback`): [Ds\Sequence](class.ds-sequence.md)

Повертає результат застосування callback-функції, переданої в
`callback`, до всіх значень колекції.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Аргумент типу [callable](language.types.callable.md).

Ця функція повинна повертати нове значення для кожного елемента
колекції.

### Значення, що повертаються

Результат застосування `callback` до кожного значення колекції.

> **Примітка**:
>
> Значення поточної колекції залишаться незмінними.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::map()****

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);print_r($sequence->map(function($value) { return $value * 2; }));print_r($sequence );?> `

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
