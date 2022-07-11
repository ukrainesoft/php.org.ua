- [« Ds\Vector::merge](ds-vector.merge.md)
- [Ds\Vector::push »](ds-vector.push.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Видаляє та повертає останнє значення

# Ds\Vector::pop

(PECL ds \>u003d 1.0.0)

Ds\Vector::pop — Видаляє та повертає останнє значення

### Опис

public **Ds\Vector::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає останнє значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останнє віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо вектор порожній.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::pop()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);var_dump($vector->pop());var_dump($vector->pop());var_dump($vector-> pop());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(2)
int(1)
