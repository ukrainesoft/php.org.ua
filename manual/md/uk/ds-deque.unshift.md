- [« Ds\Deque::toArray](ds-deque.toarray.md)
- [Колекція пар ключ-значення »](class.ds-map.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Додає значення на початок двосторонньої черги

# Ds\Deque::unshift

(PECL ds \>u003d 1.0.0)

Ds\Deque::unshift — Додає значення на початок двосторонньої черги

### Опис

public
**Ds\Deque::unshift**([mixed](language.types.declarations.md#language.types.declarations.mixed)
$values u003d ?): void

Додає значення на початок двосторонньої черги, зсуваючи всі елементи
наперед, щоб звільнити місце для нових.

### Список параметрів

`values`
Значення, що додаються.

> **Примітка**:
>
> Багато значень додаються в тому порядку, як вони були передані.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::unshift()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);$deque->unshift("a");$deque->unshift("b", "c");print_r( $ deque);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Deque Object
(
[0] u003d> b
[1] u003d> c
[2] u003d> a
[3] u003d> 1
[4] u003d> 2
[5] u003d> 3
)
