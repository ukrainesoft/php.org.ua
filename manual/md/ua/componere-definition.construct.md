- [«Componere\Definition](class.componere-definition.md)
- [Componere\Definition::addConstant
»](componere-definition.addconstant.md)

- [PHP Manual](index.md)
- [Componere\Definition](class.componere-definition.md)
- Визначення конструктора

# Componere\Definition::\_\_construct

(Componere 2 \>u003d 2.1.0)

Componere\Definition::\_\_construct - Визначення конструктора

### Опис

public **Componere\Definition::\_\_construct**(string `$name`)

public **Componere\Definition::\_\_construct**(string `$name`, string
`$parent`)

public **Componere\Definition::\_\_construct**(string `$name`, array
`$interfaces`)

public **Componere\Definition::\_\_construct**(string `$name`, string
`$parent`, array `$interfaces`)

### Список параметрів

`name`
Реєстронезалежне ім'я класу

`parent`
Реєстронезалежне ім'я класу

`interfaces`
Масив реєстронезалежних імен класів

### Винятки

**Увага**

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), якщо
зроблено спробу замінити внутрішній клас

**Увага**

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), якщо
зроблено спробу замінити інтерфейс

**Увага**

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), якщо
зроблено спробу замінити трейт

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо клас, вказаний у `interfaces` не знайдений

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо клас, вказаний в `interfaces` не є інтерфейсом
