- [« Ds\Set::filter](ds-set.filter.md)
- [Ds\Set::get »](ds-set.get.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає перший елемент колекції

# Ds\Set::first

(PECL ds \>u003d 1.0.0)

Ds\Set::first — Повертає перший елемент колекції

### Опис

public **Ds\Set::first**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає перший елемент колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перший елемент колекції.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::first()****

` <?php$set u003d new \Ds\Set([1, 2, 3]);var_dump($set->first());?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)
