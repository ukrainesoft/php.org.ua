- [« Ds\Deque::first](ds-deque.first.md)
- [Ds\Deque::insert »](ds-deque.insert.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Повертає значення за індексом

# Ds\Deque::get

(PECL ds \>u003d 1.0.0)

Ds\Deque::get — Повертає значення за індексом

### Опис

public **Ds\Deque::get**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення за заданим індексом.

### Список параметрів

`index`
Індекс. Перший елемент має індекс 0.

### Значення, що повертаються

Значення за заданим індексом.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо індекс
некоректний.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::get()****

` <?php$deque u003d new \Ds\Deque(["a", "b", "c"]);var_dump($deque->get(0));var_dump($deque->get(1) );var_dump($deque->get(2));?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"

**Приклад #2 Приклад використання **Ds\Deque::get()** із синтаксисом
масиву**

` <?php$deque u003d new \Ds\Deque(["a", "b", "c"]);var_dump($deque[0]);var_dump($deque[1]);var_dump($deque [2]);?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "a"
string(1) "b"
string(1) "c"
