- [« ReflectionParameter::hasType](reflectionparameter.hastype.md)
- [ReflectionParameter::isCallable
»](reflectionparameter.iscallable.md)

- [PHP Manual](index.md)
- [ReflectionParameter](class.reflectionparameter.md)
- Перевіряє, чи очікує аргумент масив як значення

# ReflectionParameter::isArray

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionParameter::isArray — Перевіряє, чи очікує аргумент масиву
якості значення

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

У наведеному нижче прикладі показаний альтернативний спосіб отримання цієї
інформації.

### Опис

public **ReflectionParameter::isArray**(): bool

Перевіряє, чи очікує аргумент масив як значення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо як значення очікується масив (array),
**`false`** інакше.

### Приклади

**Приклад #1 Альтернатива у PHP 8.0.0**

Починаючи з PHP 8.0.0, наступний код повідомить, чи підтримує тип
викликані об'єкти, зокрема як частина об'єднання.

` <?phpfunction declaresArray(ReflectionParameter $reflectionParameter): bool{    $reflectionType u003d $reflectionParameter->getType(); if (!$reflectionType) return false; $types u003d $reflectionType instanceof ReflectionUnionType        ?? $reflectionType->getTypes()         : [$reflectionType]; return in_array('array', array_map(fn(ReflectionNamedType $t) u003d> $t->getName(), $types));}?> `

### Дивіться також

- [ReflectionParameter::isOptional()](reflectionparameter.isoptional.md) -
Перевіряє, чи є аргумент необов'язковим
