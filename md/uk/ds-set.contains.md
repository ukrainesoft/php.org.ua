- [« Ds\Set::\_\_construct](ds-set.construct.md)
- [Ds\Set::copy »](ds-set.copy.md)

- [PHP Manual](index.md)
- [Набір](class.ds-set.md)
- Перевіряє, чи містяться в колекції задані значення

# Ds\Set::contains

(PECL ds \>u003d 1.0.0)

Ds\Set::contains — Перевіряє, чи міститься в колекції
значення

### Опис

public
**Ds\Set::contains**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): bool

Перевіряє, чи міститься у колекції задані значення.

> **Примітка**:
>
> Підтримуються значення типу об'єкта. Якщо об'єкт реалізує інтерфейс
> **Ds\Hashable**, перевірка здійснюється шляхом виклику методу об'єкта
> `equals`. Якщо об'єкт не реалізує інтерфейс **Ds\Hashable**, об'єкти
> повинні посилатися на той самий екземпляр класу.

**Застереження**

Всі порівняння суворі, за типом та значенням.

### Список параметрів

`values`
Значення для перевірки.

### Значення, що повертаються

Повертає **`false`**, якщо хоча б одне значення з `values` не
знайдено в колекції та **`true`** в іншому випадку.

### Приклади

**Приклад #1 Приклад використання **Ds\Set::contains()****

` <?php$set u003d new \Ds\Set([1, 2, 3]);var_dump($set->contains(1)); // Truevar_dump ($ set-> contains (1, 2)); // Truevar_dump ($ set-> contains (... [1, 2])); // Truevar_dump($set->contains("1")); //falsevar_dump($set->contains(...[1, 2, 3, 4])); //falsevar_dump($set->contains(...[])); // true?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(true)
bool(false)
bool(false)
bool(true)
