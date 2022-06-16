- [«
ReflectionProperty::getDefaultValue](reflectionproperty.getdefaultvalue.md)
- [ReflectionProperty::getModifiers
»](reflectionproperty.getmodifiers.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Отримання doc-коментаря для якості

# ReflectionProperty::getDocComment

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ReflectionProperty::getDocComment — Отримання doc-коментаря для
властивості

### Опис

public **ReflectionProperty::getDocComment**(): string\|false

Отримує doc-коментар для якості.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Doc-коментар, якщо він існує, інакше **`false`**.

### Приклади

**Приклад #1 Приклад **ReflectionProperty::getDocComment()****

`<?phpclass Str{    /**    * @var int  Довжина рядки     */    public $length u003d 5;}$prop u003d new '$'' ?> `

Результатом виконання цього прикладу буде щось подібне:

string(52) "/**
* @var int Довжина рядка
*/"

**Приклад #2 Декларація кількох властивостей**

Якщо doc-коментар задано перед множинною декларацією, то він буде
вважатися що належить лише до першого їх.

` <?phpclass Foo{    /** @var string */    public $a, $b;}$class u003d new \ReflectionClass('Foo');foreach ($class->getProperties()         property->getName() . ': ' . var_export($property->getDocComment(), true) . PHP_EOL;}?> `

Результат виконання цього прикладу:

a: '/** @var string */'
b: false

### Дивіться також

- [ReflectionProperty::getModifiers()](reflectionproperty.getmodifiers.md) -
Отримання модифікаторів властивостей класу
- [ReflectionProperty::getName()](reflectionproperty.getname.md) -
Отримання імені властивості
- [ReflectionProperty::getValue()](reflectionproperty.getvalue.md) -
Отримує значення
