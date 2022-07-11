- [« Ds\Deque::pop](ds-deque.pop.md)
- [Ds\Deque::reduce »](ds-deque.reduce.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Додає значення на кінець двосторонньої черги

# Ds\Deque::push

(PECL ds \>u003d 1.0.0)

Ds\Deque::push — Додає значення до кінця двосторонньої черги

### Опис

public
**Ds\Deque::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає значення на кінець двосторонньої черги.

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::push()****

` <?php$deque u003d new \Ds\Deque();$deque->push("a");$deque->push("b");$deque->push("c", "d" );$deque->push(...["e", "f"]);print_r($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
[3] u003d> d
[4] u003d> e
[5] u003d> f
)
