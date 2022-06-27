- [« Ds\Vector::sum](ds-vector.sum.md)
- [Ds\Vector::unshift »](ds-vector.unshift.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Перетворює колекцію на масив (array)

# Ds\Vector::toArray

(PECL ds \>u003d 1.0.0)

Ds\Vector::toArray — Перетворює колекцію на масив (array)

### Опис

public **Ds\Vector::toArray**(): array

Перетворює колекцію на масив (array).

> **Примітка**:
>
> Приведення до типу array поки що не підтримується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array), що містить всі елементи колекції із збереженням їх
порядку.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::toArray()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);var_dump($vector->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
int(3)
}
