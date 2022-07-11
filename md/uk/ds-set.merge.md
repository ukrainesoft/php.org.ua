- [« Ds\Set::last](ds-set.last.md)
- [Ds\Set::reduce »](ds-set.reduce.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає результат додавання всіх заданих значень до набору

# Ds\Set::merge

(PECL ds \>u003d 1.0.3)

Ds\Set::merge — Повертає результат додавання всіх заданих значень
набір

### Опис

public
**Ds\Set::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Set](class.ds-set.md)

Повертає результат додавання всіх заданих значень набір.

### Список параметрів

`values`
Об'єкт класу [traversable](class.traversable.md) чи масив (array).

### Значення, що повертаються

Результат додавання всіх переданих значень до набору. Фактично
робиться копія набору, до якої додаються значення.

> **Примітка**:
>
> Поточний екземпляр набору залишиться недоторканим.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::merge()****

` <?php$set u003d new \Ds\Set([1, 2, 3]);var_dump($set->merge([3, 4, 5]));var_dump($set);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Set)#2 (6) {
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
}
object(Ds\Set)#1 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
