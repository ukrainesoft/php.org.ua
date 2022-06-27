- [«
Componere\Definition::addConstant](componere-definition.addconstant.md)
- [Componere\Definition::register
»](componere-definition.register.md)

- [PHP Manual](index.md)
- [Componere\Definition](class.componere-definition.md)
- Додає властивість

# Componere\Definition::addProperty

(Componere 2 \>u003d 2.1.0)

Componere\Definition::addProperty — Додає властивість

### Опис

public **Componere\Definition::addProperty**(string `$name`,
[Componere\Value](class.componere-value.md) `$value`): Definition

Повинен оголосити властивість класу у поточному визначенні

### Список параметрів

`name`
Реєстронезалежне ім'я властивості

`value`
Значення якості за промовчанням

### Значення, що повертаються

Поточне визначення

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо Definition вже було зареєстровано

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо `name` вже оголошено як властивість
