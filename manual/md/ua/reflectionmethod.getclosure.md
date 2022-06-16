- [« ReflectionMethod::export](reflectionmethod.export.md)
- [ReflectionMethod::getDeclaringClass
»](reflectionmethod.getdeclaringclass.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Повертає динамічно створене замикання для методу

# ReflectionMethod::getClosure

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionMethod::getClosure — Повертає динамічно створене
замикання для методу

### Опис

public **ReflectionMethod::getClosure**(?object `$object` u003d **`null`**):
[Closure](class.closure.md)

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`object`
Заборонено для статичних методів, обов'язковий інших.

### Значення, що повертаються

Повертає замикання [Closure](class.closure.md). Повертає
**`null`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `object` тепер допускає значення null. |
