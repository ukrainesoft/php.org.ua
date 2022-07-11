- [«
ReflectionProperty::getDeclaringClass](reflectionproperty.getdeclaringclass.md)
- [ReflectionProperty::getDocComment
»](reflectionproperty.getdoccomment.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Повертає значення за замовчуванням, задане для якості

# ReflectionProperty::getDefaultValue

(PHP 8)

ReflectionProperty::getDefaultValue — Повертає значення за замовчуванням,
задане для якості

### Опис

public **ReflectionProperty::getDefaultValue**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає явно чи неявно задане значення за промовчанням властивості.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення за замовчуванням (включаючи **`null`**), якщо воно встановлено. Якщо
значення за замовчуванням не встановлено, то повертається **`null`**. Для
визначення того, чи встановлено в принципі значення за умовчанням для
властивості, використовуйте
[ReflectionProperty::hasDefaultValue()](reflectionproperty.hasdefaultvalue.md).

### Приклади

**Приклад #1 Приклад використання
**ReflectionProperty::getDefaultValue()****

`<?phpclass Foo {    public $bar u003d 1; public ?int $baz; public int $boing u003d 0;}$ro u003d new ReflectionClass(Foo::class);var_dump($ro->getProperty('bar')->getDefaultValue());var_dump($ro->getProperty('baz') )->getDefaultValue());var_dump($ro->getProperty('boing')->getDefaultValue());?> `

Результат виконання цього прикладу:

int(1)
NULL
int(0)

### Дивіться також

- [ReflectionProperty::hasDefaultValue()](reflectionproperty.hasdefaultvalue.md) -
Перевіряє, чи встановлено значення за замовчуванням.
