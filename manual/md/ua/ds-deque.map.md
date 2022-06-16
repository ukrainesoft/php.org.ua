- [« Ds\Deque::last](ds-deque.last.md)
- [Ds\Deque::merge »](ds-deque.merge.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає результат застосування callback-функції до всіх значень
двосторонньої черги

# Ds\Deque::map

(PECL ds \>u003d 1.0.0)

Ds\Deque::map — Повертає результат застосування callback-функції до всіх
значенням двосторонньої черги

### Опис

public **Ds\Deque::map**([callable](language.types.callable.md)
`$callback`): [Ds\Deque](class.ds-deque.md)

Повертає результат застосування callback-функції, переданої в
`callback`, до всіх значень двосторонньої черги.

### Список параметрів

`callback`
callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Аргумент типу [callable](language.types.callable.md).

Ця функція повинна повертати нове значення для кожного елемента
двосторонньої черги.

### Значення, що повертаються

Результат застосування `callback`-функції до кожного значення двосторонньої
черги.

> **Примітка**:
>
> Значення поточної двосторонньої черги залишаться незмінними.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::map()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);print_r($deque->map(function($value) { return $value * 2; }));print_r($deque );?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> 2
[1] u003d> 4
[2] u003d> 6
)
Ds\Deque Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
