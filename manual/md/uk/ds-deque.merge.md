- [«Ds\Deque::map](ds-deque.map.md)
- [Ds\Deque::pop »](ds-deque.pop.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає результат додавання всіх заданих значень у
двосторонню чергу

# Ds\Deque::merge

(PECL ds \>u003d 1.0.0)

Ds\Deque::merge — Повертає результат додавання всіх заданих значень
у двосторонню чергу

### Опис

public
**Ds\Deque::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$values`): [Ds\Deque](class.ds-deque.md)

Повертає результат додавання всіх заданих значень у двосторонню
чергу.

### Список параметрів

`values`
Об'єкт класу [traversable](class.traversable.md) або array.

### Значення, що повертаються

Результат додавання всіх переданих значень у двосторонню чергу.
Фактично робиться копія двосторонньої черги, до якої додаються
значення.

> **Примітка**:
>
> Поточний екземпляр двосторонньої черги залишиться недоторканим.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::merge()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);var_dump($deque->merge([4, 5, 6]));var_dump($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

object(Ds\Deque)#2 (6) {
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
object(Ds\Deque)#1 (3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
