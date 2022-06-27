- [« Ds\Stack::push](ds-stack.push.md)
- [Черга»](class.ds-queue.md)

- [PHP Manual](index.md)
- [Стек](class.ds-stack.md)
- Перетворює колекцію на масив (array)

# Ds\Stack::toArray

(PECL ds \>u003d 1.0.0)

Ds\Stack::toArray — Перетворює колекцію на масив (array)

### Опис

public **Ds\Stack::toArray**(): array

Перетворює колекцію на array.

> **Примітка**:
>
> Приведення до типу array поки що не підтримується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array), що містить всі елементи колекції із збереженням їх
порядку.

### Приклади

**Приклад #1 Приклад використання **Ds\Stack::toArray()****

` <?php$stack u003d new \Ds\Stack([1, 2, 3]);var_dump($stack->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
int(3)
[1]u003d>
int(2)
[2]u003d>
int(1)
}
