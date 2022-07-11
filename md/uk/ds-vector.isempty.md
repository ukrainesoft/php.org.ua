- [« Ds\Vector::insert](ds-vector.insert.md)
- [Ds\Vector::join »](ds-vector.join.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Перевіряє, чи порожній вектор

# Ds\Vector::isEmpty

(PECL ds \>u003d 1.0.0)

Ds\Vector::isEmpty — Перевіряє, чи порожній вектор

### Опис

public **Ds\Vector::isEmpty**(): bool

Перевіряє, чи вектор порожній.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вектор порожній, **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::isEmpty()****

` <?php$a u003d new \Ds\Vector([1, 2, 3]);$b u003d new \Ds\Vector();var_dump($a->isEmpty());var_dump($b-> isEmpty());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)
bool(true)
