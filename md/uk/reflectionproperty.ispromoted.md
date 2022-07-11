- [« ReflectionProperty::isPrivate](reflectionproperty.isprivate.md)
- [ReflectionProperty::isProtected
»](reflectionproperty.isprotected.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Перевіряє, чи визначено властивість у конструкторі

# ReflectionProperty::isPromoted

(PHP 8)

ReflectionProperty::isPromoted — Перевіряє, чи визначено властивість
конструктори

### Опис

public **ReflectionProperty::isPromoted**(): bool

Перевіряє, чи визначена властивість в
конструктори](language.oop5.decon.md#language.oop5.decon.constructor.promotion).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо властивість визначена у конструкторі,
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::isPromoted()****

`<?phpclass Foo {    public $baz; public function __construct(public $bar) {}}$o u003d new Foo(42);$o->baz u003d 42;$ro u003d new ReflectionObject($o);var_dump($ro->getProperty('bar') ->isPromoted());var_dump($ro->getProperty('baz')->isPromoted());?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [ReflectionProperty::isDefault()](reflectionproperty.isdefault.md) -
Перевіряє, чи є значення властивістю за умовчанням
- [ReflectionProperty::isInitialized()](reflectionproperty.isinitialized.md) -
Перевірити, чи ініціалізована властивість
- [ReflectionProperty::getValue()](reflectionproperty.getvalue.md) -
Отримує значення
