- [«
Componere\Definition::isRegistered](componere-definition.isregistered.md)
- [Componere\Definition::getClosures
»](componere-definition.getclosures.md)

- [PHP Manual](index.md)
- [Componere\Definition](class.componere-definition.md)
- Отримує замикання

# Componere\Definition::getClosure

(Componere 2 \>u003d 2.1.0)

Componere\Definition::getClosure — Отримує замикання

### Опис

public **Componere\Definition::getClosure**(string `$name`):
[Closure](class.closure.md)

Повинен повернути замикання для вказаного методу

### Список параметрів

`name`
Реєстронезалежне ім'я методу

### Значення, що повертаються

Замикання, прив'язане до коректної області

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо Definition вже було зареєстровано

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо `name` не знайдено
