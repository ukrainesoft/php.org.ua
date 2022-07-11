- [« Ds\Queue::peek](ds-queue.peek.md)
- [Ds\Queue::push »](ds-queue.push.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Видаляє та повертає значення з початку черги

# Ds\Queue::pop

(PECL ds \>u003d 1.0.0)

Ds\Queue::pop — Видаляє та повертає значення з початку черги

### Опис

public **Ds\Queue::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає значення з початку черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Видалене значення з початку черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::pop()****

` <?php$queue u003d new \Ds\Queue();$queue->push("a");$queue->push("b");$queue->push("c");var_dump( $queue->pop());var_dump($queue->pop());var_dump($queue->pop());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"
