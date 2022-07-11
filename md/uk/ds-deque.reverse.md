- [« Ds\Deque::remove](ds-deque.remove.md)
- [Ds\Deque::reversed »](ds-deque.reversed.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Перевертає поточну двосторонню чергу

# Ds\Deque::reverse

(PECL ds \>u003d 1.0.0)

Ds\Deque::reverse — Перевертає поточну двосторонню чергу.

### Опис

public **Ds\Deque::reverse**(): void

Перевертає поточну двосторонню чергу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::reverse()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c"]);$deque->reverse();print_r($deque);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> c
[1] u003d> b
[2] u003d> a
)
