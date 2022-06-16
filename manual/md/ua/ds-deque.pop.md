- [« Ds\Deque::merge](ds-deque.merge.md)
- [Ds\Deque::push »](ds-deque.push.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Видаляє та повертає останнє значення

# Ds\Deque::pop

(PECL ds \>u003d 1.0.0)

Ds\Deque::pop — Видаляє та повертає останнє значення

### Опис

public **Ds\Deque::pop**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає останнє значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Останнє віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо колекція
порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::pop()****

` <?php$deque u003d new \Ds\Deque([1, 2, 3]);var_dump($deque->pop());var_dump($deque->pop());var_dump($deque-> pop());?> `

Результатом виконання цього прикладу буде щось подібне:

int(3)
int(2)
int(1)
