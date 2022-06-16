- [« Ds\Deque::find](ds-deque.find.md)
- [Ds\Deque::get »](ds-deque.get.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає перший елемент двосторонньої черги

# Ds\Deque::first

(PECL ds \>u003d 1.0.0)

Ds\Deque::first — Повертає перший елемент двосторонньої черги

### Опис

public **Ds\Deque::first**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає перший елемент двосторонньої черги.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перший елемент двосторонньої черги.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо двостороння
черга порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::first()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);var_dump($deque->first());?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)
