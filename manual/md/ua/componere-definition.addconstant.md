- [«
Componere\Definition::\_\_construct](componere-definition.construct.md)
- [Componere\Definition::addProperty
»](componere-definition.addproperty.md)

- [PHP Manual](index.md)
- [Componere\Definition](class.componere-definition.md)
- додає константу

# Componere\Definition::addConstant

(Componere 2 \>u003d 2.1.0)

Componere\Definition::addConstant — Додає константу

### Опис

public **Componere\Definition::addConstant**(string `$name`,
[Componere\Value](class.componere-value.md) `$value`): Definition

Повинен оголосити константу класу у поточному визначенні

### Список параметрів

`name`
Реєстронезалежне ім'я константи

`value`
Значення константи не повинно бути невизначеним (undefined) або
статичним

### Значення, що повертаються

Поточне визначення

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо Definition вже було зареєстровано

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо `name` вже оголошено як константа

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо `value` є статичним

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо `value` є невизначеним
