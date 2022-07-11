- [« Ds\Sequence::join](ds-sequence.join.md)
- [Ds\Sequence::map »](ds-sequence.map.md)

- [PHP Manual](index.md)
- [Послідовність](class.ds-sequence.md)
- Повертає останнє значення колекції

# Ds\Sequence::last

(PECL ds \>u003d 1.0.0)

Ds\Sequence::last — Повертає останнє значення колекції

### Опис

abstract public **Ds\Sequence::last**():
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

**Приклад #1 Приклад використання **Ds\Sequence::last()****

` <?php$sequence u003d new \Ds\Vector([1, 2, 3]);var_dump($sequence->last());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
