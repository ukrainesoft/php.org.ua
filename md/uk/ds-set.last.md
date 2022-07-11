- [« Ds\Set::jsonSerialize](ds-set.jsonserialize.md)
- [Ds\Set::merge »](ds-set.merge.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Повертає останнє значення колекції

# Ds\Set::last

(PECL ds \>u003d 1.0.0)

Ds\Set::last — Повертає останнє значення колекції

### Опис

public **Ds\Set::last**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає останнє значення колекції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останній елемент колекції.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::last()****

` <?php$set u003d new \Ds\Set([1, 2, 3]);var_dump($set->last());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
