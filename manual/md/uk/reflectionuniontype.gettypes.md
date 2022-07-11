- [«ReflectionUnionType](class.reflectionuniontype.md)
- [ReflectionGenerator »](class.reflectiongenerator.md)

- [PHP Manual](index.md)
- [ReflectionUnionType](class.reflectionuniontype.md)
- Повертає типи, включені до типу union

# ReflectionUnionType::getTypes

(PHP 8)

ReflectionUnionType::getTypes — Повертає типи, включені до типу union

### Опис

public **ReflectionUnionType::getTypes**(): array

Повертає відображення типів, включених у тип union.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів [ReflectionType](class.reflectiontype.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionUnionType::getTypes()****

` <?phpfunction someFunction(int|float $number) {}$reflectionFunc u003d new ReflectionFunction('someFunction');$reflectionParam u003d$reflectionFunc->getParameters()[$] getTypes()); `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
[0] u003d>
class ReflectionNamedType#4(0) {
}
[1] u003d>
class ReflectionNamedType#5(0) {
}
}

### Дивіться також

- [ReflectionType::allowsNull()](reflectiontype.allowsnull.md) -
Перевіряє, чи допустимо NULL
- [ReflectionParameter::getType()](reflectionparameter.gettype.md) -
Отримати тип параметра
