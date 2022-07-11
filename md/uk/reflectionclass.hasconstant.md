- [« ReflectionClass::getTraits](reflectionclass.gettraits.md)
- [ReflectionClass::hasMethod »](reflectionclass.hasmethod.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи визначено константу

# ReflectionClass::hasConstant

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasConstant — Перевіряє, чи визначена константа

### Опис

public **ReflectionClass::hasConstant**(string `$name`): bool

Перевіряє, чи в класі визначена зазначена константа чи ні.

### Список параметрів

`name`
Ім'я константи, що перевіряється.

### Значення, що повертаються

**`true`**, якщо константа визначена, інакше **`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::hasConstant()****

` <?phpclass Foo {   const c1 u003d 1;}$class u003d new ReflectionClass("Foo");var_dump($class->hasConstant("c1"));var_dump($class->hasConstant(" ;?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)

### Дивіться також

- [ReflectionClass::hasMethod()](reflectionclass.hasmethod.md) -
Перевіряє, чи заданий метод
- [ReflectionClass::hasProperty()](reflectionclass.hasproperty.md) -
Перевіряє, чи визначено властивість
