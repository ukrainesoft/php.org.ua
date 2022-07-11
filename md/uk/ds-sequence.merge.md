- [«Ds\Sequence::map](ds-sequence.map.md)
- [Ds\Sequence::pop »](ds-sequence.pop.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає результат додавання всіх заданих значень до колекції

# Ds\Sequence::merge

(PECL ds \>u003d 1.0.0)

Ds\Sequence::merge — Повертає результат додавання всіх даних
значень у колекцію

### Опис

abstract public
**Ds\Sequence::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Sequence](class.ds-sequence.md)

Повертає результат додавання всіх заданих значень до колекції.

### Список параметрів

`values`
Об'єкт класу [traversable](class.traversable.md) або array.

### Значення, що повертаються

Результат додавання всіх переданих значень колекцію. Фактично
робиться копія колекції, до якої додаються значення.

> **Примітка**:
>
> Поточний екземпляр колекції залишиться недоторканим.

### Приклади

**Приклад #1 Приклад використання **Ds\Sequence::merge()****

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);var_dump($sequence->merge([4, 5, 6]));var_dump($sequence);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Vector)#2 (6) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
[3]u003d>
int(4)
[4]u003d>
int(5)
[5]u003d>
int(6)
}
object(Ds\Vector)#1 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
