- [« Ds\Deque::reduce](ds-deque.reduce.md)
- [Ds\Deque::reverse »](ds-deque.reverse.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Видаляє та повертає значення за індексом

# Ds\Deque::remove

(PECL ds \>u003d 1.0.0)

Ds\Deque::remove — Видаляє та повертає значення за індексом

### Опис

public **Ds\Deque::remove**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Видаляє та повертає значення за індексом.

### Список параметрів

`index`
Індекс, яким необхідно видалити значення.

### Значення, що повертаються

Віддалене значення.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::remove()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c"]);var_dump($deque->remove(1));var_dump($deque->remove(0) );var_dump($deque->remove(0));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "b"
string(1) "a"
string(1) "c"
