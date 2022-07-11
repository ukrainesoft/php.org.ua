- [« Ds\Deque::jsonSerialize](ds-deque.jsonserialize.md)
- [Ds\Deque::map »](ds-deque.map.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає останнє значення двосторонньої черги

# Ds\Deque::last

(PECL ds \>u003d 1.0.0)

Ds\Deque::last — Повертає останнє значення двосторонньої черги

### Опис

public **Ds\Deque::last**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає останнє значення двосторонньої черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останній елемент двосторонньої черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо двосторонній
черги порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::last()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);var_dump($deque->last());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
