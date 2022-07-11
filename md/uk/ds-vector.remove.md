- [« Ds\Vector::reduce](ds-vector.reduce.md)
- [Ds\Vector::reverse »](ds-vector.reverse.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Видаляє та повертає значення за індексом

# Ds\Vector::remove

(PECL ds \>u003d 1.0.0)

Ds\Vector::remove — Видаляє та повертає значення за індексом

### Опис

public **Ds\Vector::remove**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає значення за індексом.

### Список параметрів

`index`
Індекс, яким необхідно видалити значення.

### Значення, що повертаються

Віддалене значення.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::remove()****

` <?php$vector u003d new \Ds\Vector(["a", "b", "c"]);var_dump($vector->remove(1));var_dump($vector->remove(0) );var_dump($vector->remove(0));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "b"
string(1) "a"
string(1) "c"
