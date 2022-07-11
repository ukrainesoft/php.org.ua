- [« Ds\Collection::isEmpty](ds-collection.isempty.md)
- [Хешується»](class.ds-hashable.md)

- [PHP Manual](index.md)
- [Колекція](class.ds-collection.md)
- Перетворює колекцію на масив (array)

# Ds\Collection::toArray

(PECL ds \>u003d 1.0.0)

Ds\Collection::toArray — Перетворює колекцію на масив (array)

### Опис

abstract public **Ds\Collection::toArray**(): array

Перетворює колекцію на array.

> **Примітка**:
>
> Приведення до масиву (array) не підтримується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array), що містить всі елементи колекції у тому порядку.

### Приклади

**Приклад #1 Приклад **Ds\Collection::toArray()****

` <?php$collection u003d new \Ds\Vector([1, 2, 3]);var_dump($collection->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
