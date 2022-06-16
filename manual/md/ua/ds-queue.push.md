- [« Ds\Queue::pop](ds-queue.pop.md)
- [Ds\Queue::toArray »](ds-queue.toarray.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Додає значення у чергу

# Ds\Queue::push

(PECL ds \>u003d 1.0.0)

Ds\Queue::push — Додає значення в чергу

### Опис

public
**Ds\Queue::push**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Додає значення `values` у чергу.

### Список параметрів

`values`
Значення, що додаються.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::push()****

` <?php$queue u003d new \Ds\Queue();$queue->push("a");$queue->push("b");$queue->push("c", "d" );$queue->push(...["e", "f"]);print_r($queue);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Queue Object
(
[0] u003d> a
[1] u003d> b
[2] u003d> c
[3] u003d> d
[4] u003d> e
[5] u003d> f
)
