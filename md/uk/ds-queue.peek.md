- [« Ds\Queue::jsonSerialize](ds-queue.jsonserialize.md)
- [Ds\Queue::pop »](ds-queue.pop.md)

- [PHP Manual](index.md)
- [Черга](class.ds-queue.md)
- Повертає значення із початку черги

# Ds\Queue::peek

(PECL ds \>u003d 1.0.0)

Ds\Queue::peek — Повертає значення з початку черги

### Опис

public **Ds\Queue::peek**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення від початку черги, але не видаляє його.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення із початку черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Queue::peek()****

` <?php$queue u003d new \Ds\Queue();$queue->push("a");$queue->push("b");$queue->push("c");var_dump( $queue->peek());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
