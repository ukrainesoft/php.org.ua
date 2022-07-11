- [« Ds\Queue::capacity](ds-queue.capacity.md)
- [Ds\Queue::\_\_construct »](ds-queue.construct.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Видаляє всі значення

# Ds\Queue::clear

(PECL ds \>u003d 1.0.0)

Ds\Queue::clear — Видаляє всі значення

### Опис

public **Ds\Queue::clear**(): void

Видаляє всі значення із черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::clear()****

` <?php$queue u003d new \Ds\Queue([1, 2, 3]);print_r($queue);$queue->clear();print_r($queue);?> `

Результатом виконання цього прикладу буде щось подібне:

Ds\Queue Object
(
[0] u003d> 1
[1] u003d> 2
[2] u003d> 3
)
Ds\Queue Object
(
)
