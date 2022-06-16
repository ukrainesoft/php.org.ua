- [«
Componere\Abstract\Definition::addInterface](componere-abstract-definition.addinterface.md)
- [Componere\Abstract\Definition::addTrait
»](componere-abstract-definition.addtrait.md)

- [PHP Manual](index.md)
- [Componere\Abstract\Definition](class.componere-abstract-definition.md)
- Додає метод

# Componere\Abstract\Definition::addMethod

(Componere 2 \>u003d 2.1.0)

Componere\Abstract\Definition::addMethod — Додає метод

### Опис

public **Componere\Abstract\Definition::addMethod**(string `$name`,
[Componere\Method](class.componere-method.md) `$method`): Definition

Повинен створити або перевизначити метод у поточному визначенні.

### Список параметрів

`name`
Нечутливе до регістру ім'я методу

`method`
[Componere\Method](class.componere-method.md) раніше не доданий до
іншому Definition

### Значення, що повертаються

The current Definition

### Exceptions

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо Definition був зареєстрований

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо метод був доданий до іншого визначення
