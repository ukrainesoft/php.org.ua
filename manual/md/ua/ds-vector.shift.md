- [« Ds\Vector::set](ds-vector.set.md)
- [Ds\Vector::slice »](ds-vector.slice.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Видаляє та повертає перше значення

# Ds\Vector::shift

(PECL ds \>u003d 1.0.0)

Ds\Vector::shift — Видаляє та повертає перше значення

### Опис

public **Ds\Vector::shift**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає перше значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перше віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо вектор порожній.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::shift()****

` <?php$vector u003d new \Ds\Vector(["a", "b", "c"]);var_dump($vector->shift());var_dump($vector->shift()); var_dump($vector->shift());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"
