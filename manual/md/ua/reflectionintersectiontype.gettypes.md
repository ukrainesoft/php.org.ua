- [«
ReflectionIntersectionType](class.reflectionintersectiontype.md)
- [ReflectionReference »](class.reflectionreference.md)

- [PHP Manual](index.md)
- [ReflectionIntersectionType](class.reflectionintersectiontype.md)
- Повертає типи, включені до типу intersection

# ReflectionIntersectionType::getTypes

(PHP 8 \>u003d 8.1.0)

ReflectionIntersectionType::getTypes — Повертає типи, включені до типу
intersection

### Опис

public **ReflectionIntersectionType::getTypes**(): array

Повертає типи, включені у тип intersection.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив об'єктів [ReflectionType](class.reflectiontype.md).

### Приклади

**Приклад #1 Приклад використання
**ReflectionIntersectionType::getTypes()****

` <?phpfunction someFunction(Iterator&Countable $value) {}$reflectionFunc u003d new ReflectionFunction('someFunction');$reflectionParam u003d$reflectionFunc->getParameters()[get]>_Type ));?> `

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
