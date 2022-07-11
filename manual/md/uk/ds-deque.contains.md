- [« Ds\Deque::\_\_construct](ds-deque.construct.md)
- [Ds\Deque::copy »](ds-deque.copy.md)

- [PHP Manual](index.md)
- [Двостороння черга](class.ds-deque.md)
- Перевіряє, чи є у двосторонній черзі задані значення

# Ds\Deque::contains

(PECL ds \>u003d 1.0.0)

Ds\Deque::contains — Перевіряє, чи міститься у двосторонній черзі
задані значення

### Опис

public
**Ds\Deque::contains**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

Перевіряє, чи міститься у двосторонній черзі задані значення.

### Список параметрів

`values`
Значення для перевірки.

### Значення, що повертаються

Повертає **`false`**, якщо хоча б одне значення з `values` не
знайдено в колекції та **`true`** в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Deque::contains()****

` <?php$deque u003d new \Ds\Deque(['a', 'b', 'c', 1, 2, 3]);var_dump($deque->contains('a')); //truevar_dump($deque->contains('a', 'b')); // truevar_dump($deque->contains('c', 'd')); //falsevar_dump($deque->contains(...['c', 'b', 'a'])); // true// Завжди строга перевіркаvar_dump($deque->contains(1)); // Truevar_dump($deque->contains('1')); //falsevar_dump($sequece->contains(...[])); // true?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)
