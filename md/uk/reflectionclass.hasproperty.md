- [« ReflectionClass::hasMethod](reflectionclass.hasmethod.md)
- [ReflectionClass::implementsInterface
»](reflectionclass.implementsinterface.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи визначено властивість

# ReflectionClass::hasProperty

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasProperty — Перевіряє, чи визначено властивість

### Опис

public **ReflectionClass::hasProperty**(string `$name`): bool

Перевіряє, чи в класі визначено зазначену властивість чи ні.

### Список параметрів

`name`
Ім'я властивості, що перевіряється.

### Значення, що повертаються

**`true`**, якщо властивість задано, інакше **`false`**

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::hasProperty()****

` <?phpclass Foo {    public    $p1; protected $ p2; private   $p3;}$obj u003d new ReflectionObject(new Foo());var_dump($obj->hasProperty("p1"));var_dump($obj->hasProperty("p2"));var_dump($obj- >hasProperty("p3"));var_dump($obj->hasProperty("p4"));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(true)
bool(false)

### Дивіться також

- [ReflectionClass::hasConstant()](reflectionclass.hasconstant.md) -
Перевіряє, чи визначена константа
- [ReflectionClass::hasMethod()](reflectionclass.hasmethod.md) -
Перевіряє, чи заданий метод
