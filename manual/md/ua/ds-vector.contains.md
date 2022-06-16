- [« Ds\Vector::\_\_construct](ds-vector.construct.md)
- [Ds\Vector::copy »](ds-vector.copy.md)

- [PHP Manual](index.md)
- [Вектор](class.ds-vector.md)
- Перевіряє, чи у векторі задані значення

# Ds\Vector::contains

(PECL ds \>u003d 1.0.0)

Ds\Vector::contains — Перевіряє, чи міститься у векторі задані
значення

### Опис

public
**Ds\Vector::contains**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

Перевіряє, чи у векторі задані значення.

### Список параметрів

`values`
Значення для перевірки.

### Значення, що повертаються

Повертає **`false`**, якщо хоча б одне значення з `values` не
знайдено у векторі і **`true`** інакше.

### Приклади

**Приклад #1 Приклад використання **Ds\Vector::contains()****

` <?php$vector u003d new \Ds\Vector(['a', 'b', 'c', 1, 2, 3]);var_dump($vector->contains('a')); //truevar_dump($vector->contains('a', 'b')); //truevar_dump($vector->contains('c', 'd')); //falsevar_dump($vector->contains(...['c', 'b', 'a'])); // true// Завжди строга перевіркаvar_dump($vector->contains(1)); // Truevar_dump($vector->contains('1')); //falsevar_dump($sequece->contains(...[])); // true?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)
