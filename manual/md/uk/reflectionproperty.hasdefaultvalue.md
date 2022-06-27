- [« ReflectionProperty::getValue](reflectionproperty.getvalue.md)
- [ReflectionProperty::hasType »](reflectionproperty.hastype.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Перевіряє, чи встановлено значення за замовчуванням.

# ReflectionProperty::hasDefaultValue

(PHP 8)

ReflectionProperty::hasDefaultValue — Перевіряє, чи встановлено для властивості
значення за замовчуванням

### Опис

public **ReflectionProperty::hasDefaultValue**(): bool

Перевіряє, чи встановлено значення за замовчуванням, включаючи для властивості.
**`null`**. Повертає **`false`** для типізованих властивостей без
заданого значення за замовчуванням і для властивостей, що динамічно визначаються.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Якщо для властивості встановлено значення за замовчуванням (включаючи **`null`**), то
повертає **`true`**. Якщо властивість типізована і для нього не задано
значення за замовчуванням, або якщо це динамічно визначувана властивість,
то повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання
**ReflectionProperty::hasDefaultValue()****

`<?phpclass Foo {    public $bar; public ?int $baz; public ?int $foo u003d null; public int $boing; public function __construct()    {        $this->ping u003d ''; }}$ro u003d new ReflectionObject(new Foo());var_dump($ro->getProperty('bar')->hasDefaultValue());var_dump($ro->getProperty('baz')->hasDefaultValue() );var_dump($ro->getProperty('foo')->hasDefaultValue());var_dump($ro->getProperty('boing')->hasDefaultValue());var_dump($ro->getProperty('ping ')->hasDefaultValue()); // Динамічне властивістьvar_dump($ro->getProperty('pong')->hasDefaultValue()); // Невизначена властивість?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

Безглуздий error: Uncaught ReflectionException: Property Foo::$pong не існує в example.php

### Дивіться також

- [ReflectionProperty::getDefaultValue()](reflectionproperty.getdefaultvalue.md) -
Повертає значення за замовчуванням, задане для якості
