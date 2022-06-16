- [« ReflectionProperty::hasType](reflectionproperty.hastype.md)
- [ReflectionProperty::isInitialized
»](reflectionproperty.isinitialized.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Перевіряє, чи є значення властивістю за умовчанням

# ReflectionProperty::isDefault

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::isDefault — Перевіряє, чи є значення
властивістю за замовчуванням

### Опис

public **ReflectionProperty::isDefault**(): bool

Перевіряє, чи є значення властивістю заданою на етапі компіляції
або встановлено динамічно під час виконання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**, якщо властивість оголошена під час компіляції, або
**`false`**, якщо вона була створена під час виконання.

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::isDefault()****

` <?phpclass Foo {    public $bar;}$o u003d new Foo();$o->bar u003d 42;$o->baz u003d 42;$ro u003d new ReflectionObject($o);var_dump >getProperty('bar')->isDefault());var_dump($ro->getProperty('baz')->isDefault());?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [ReflectionProperty::getValue()](reflectionproperty.getvalue.md) -
Отримує значення
