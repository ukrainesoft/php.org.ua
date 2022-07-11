- [« Ds\Deque::set](ds-deque.set.md)
- [Ds\Deque::slice »](ds-deque.slice.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Видаляє та повертає перше значення

# Ds\Deque::shift

(PECL ds \>u003d 1.0.0)

Ds\Deque::shift — Видаляє та повертає перше значення

### Опис

public **Ds\Deque::shift**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає перше значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Перше віддалене значення.

### Помилки

Викидає виняток
[UnderflowException](class.underflowexception.md), якщо двостороння
черга порожня.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::shift()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c"]);var_dump($deque->shift());var_dump($deque->shift()); var_dump($deque->shift());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"
