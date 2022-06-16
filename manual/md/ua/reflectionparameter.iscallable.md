- [« ReflectionParameter::isArray](reflectionparameter.isarray.md)
- [ReflectionParameter::isDefaultValueAvailable
»](reflectionparameter.isdefaultvalueavailable.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Визначити, чи має параметр бути типу callable

# ReflectionParameter::isCallable

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

ReflectionParameter::isCallable — Визначити, чи має бути параметр бути
типу callable

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

У наведеному нижче прикладі показаний альтернативний спосіб отримання цієї
інформації.

### Опис

public **ReflectionParameter::isCallable**(): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо параметр
[callable](language.types.callable.md), **`false`** у протилежному
випадку. У разі виникнення помилки поверне **`null`**.

### Приклади

**Приклад #1 Альтернатива у PHP 8.0.0**

Починаючи з PHP 8.0.0, наступний код повідомить, чи підтримує тип
викликані об'єкти, зокрема як частина об'єднання.

` <?phpfunction declaresCallable(ReflectionParameter $reflectionParameter): bool{    $reflectionType u003d $reflectionParameter->getType(); if (!$reflectionType) return false; $types u003d $reflectionType instanceof ReflectionUnionType        ?? $reflectionType->getTypes()         : [$reflectionType]; return in_array('callable', array_map(fn(ReflectionNamedType $t) u003d> $t->getName(), $types));}?> `
