- [«
ReflectionProperty::setAccessible](reflectionproperty.setaccessible.md)
- [ReflectionProperty::\_\_toString
»](reflectionproperty.tostring.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Встановлення значення якості

# ReflectionProperty::setValue

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::setValue — Встановлення значення властивості

### Опис

public **ReflectionProperty::setValue**(object `$object`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
**ReflectionProperty::setValue**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Задає (змінює) значення якості.

### Список параметрів

`object`
Якщо властивість нестатична, необхідно передати об'єкт, властивість
якому потрібно змінити. Якщо властивість статична, цей аргумент
пропускається, і потрібно встановити тільки `value`.

`value`
Нове значення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо властивість
недоступне. Можна робити захищені та закриті властивості доступними з
допомогою
[ReflectionProperty::setAccessible()](reflectionproperty.setaccessible.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::setValue()****

`<?phpclass Foo {    public static $staticProperty; public $property; protected $privateProperty;}$reflectionClass u003d new ReflectionClass('Foo');$reflectionClass->getProperty('staticProperty')->setValue('foo');var_dump(Foo::$staticProperty);$foo $reflectionClass->getProperty('property')->setValue($foo, 'bar');var_dump($foo->property);$reflectionProperty u003d $reflectionClass->getProperty('privateProperty');$reflectionProperty->setAccess (true);$reflectionProperty->setValue($foo, 'foobar');var_dump($reflectionProperty->getValue($foo));?> `

Результат виконання цього прикладу:

string(3) "foo"
string(3) "bar"
string(6) "foobar"

### Дивіться також

- [ReflectionProperty::getValue()](reflectionproperty.getvalue.md) -
Отримує значення
- [ReflectionProperty::setAccessible()](reflectionproperty.setaccessible.md) -
Робить властивість доступною
- [ReflectionClass::setStaticPropertyValue()](reflectionclass.setstaticpropertyvalue.md) -
Встановлює значення статичної властивості
