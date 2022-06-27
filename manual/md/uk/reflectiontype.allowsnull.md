- [«ReflectionType](class.reflectiontype.md)
- [ReflectionType::\_\_toString »](reflectiontype.tostring.md)

- [PHP Manual](index.md)
- [ReflectionType](class.reflectiontype.md)
- Перевіряє, чи допустимо NULL

# ReflectionType::allowsNull

(PHP 7, PHP 8)

ReflectionType::allowsNull — Перевіряє, чи допустимо NULL

### Опис

public **ReflectionType::allowsNull**(): bool

Перевіряє, чи допустимо **`null`** у заданому параметрі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо **`null`** допустимо, інакше **`false`**

### Приклади

**Приклад #1 Приклад використання **ReflectionType::allowsNull()****

`<?phpfunction someFunction(string $param, StdClass $param2 u003d null) {}$reflectionFunc u003d new ReflectionFunction('someFunction');$reflectionParams u003d $reflectionFunc>$reflectionFunc ()->allowsNull());var_dump($reflectionParams[1]->getType()->allowsNull()); `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [ReflectionNamedType::isBuiltin()](reflectionnamedtype.isbuiltin.md) -
Перевіряє, чи є тип вбудованим
- [ReflectionType::\_\_toString()](reflectiontype.tostring.md) -
Перетворення на рядок
- [ReflectionParameter::getType()](reflectionparameter.gettype.md) -
Отримати тип параметра
