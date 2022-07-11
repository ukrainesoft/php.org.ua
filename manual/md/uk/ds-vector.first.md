- [« Ds\Vector::find](ds-vector.find.md)
- [Ds\Vector::get »](ds-vector.get.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Повертає перший елемент вектора

# Ds\Vector::first

(PECL ds \>u003d 1.0.0)

Ds\Vector::first — Повертає перший елемент вектора

### Опис

public **Ds\Vector::first**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає перший елемент вектор.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перший елемент вектор.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо вектор порожній.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::first()****

` <?php$vector u003d new \Ds\Vector([1, 2, 3]);var_dump($vector->first());?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)
