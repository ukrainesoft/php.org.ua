- [« ReflectionType::allowsNull](reflectiontype.allowsnull.md)
- [ReflectionUnionType »](class.reflectionuniontype.md)

- [PHP Manual](index.md)
- [ReflectionType](class.reflectiontype.md)
- Перетворення на рядок

# ReflectionType::\_\_toString

(PHP 7, PHP 8)

ReflectionType::\_\_toString — Перетворення на рядок

**Увага**

Ця функція оголошена *УСТАРШЕНОЮ*, починаючи з PHP 7.1.0. Використати
цю функцію вкрай не рекомендується.

### Опис

public **ReflectionType::\_\_toString**(): string

Отримує назву типу параметра.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тип параметра.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------|
| 7.1.0 | **ReflectionType::\_\_toString()** оголошений застарілим. |

### Приклади

**Приклад #1 Приклад використання **ReflectionType::\_\_toString()****

` <?phpfunction someFunction(string $param) {}$reflectionFunc u003d new ReflectionFunction('someFunction');$reflectionParam u003d $reflectionFunc->getParameters()[0];echo $reflection `

Результатом виконання цього прикладу буде щось подібне:

string

### Дивіться також

- [ReflectionNamedType::getName()](reflectionnamedtype.getname.md) -
Отримує ім'я типу у вигляді рядка
- [ReflectionNamedType::isBuiltin()](reflectionnamedtype.isbuiltin.md) -
Перевіряє, чи є тип вбудованим
- [ReflectionType::allowsNull()](reflectiontype.allowsnull.md) -
Перевіряє, чи допустимо NULL
- [ReflectionUnionType::getTypes()](reflectionuniontype.gettypes.md) -
Повертає типи, включені до типу union
- [ReflectionParameter::getType()](reflectionparameter.gettype.md) -
Отримати тип параметра
