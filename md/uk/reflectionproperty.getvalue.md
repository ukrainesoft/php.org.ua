- [« ReflectionProperty::getType](reflectionproperty.gettype.md)
- [ReflectionProperty::hasDefaultValue
»](reflectionproperty.hasdefaultvalue.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- набуває значення

# ReflectionProperty::getValue

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::getValue — Отримує значення

### Опис

public **ReflectionProperty::getValue**(?object `$object` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує значення якості.

### Список параметрів

`object`
Якщо властивість не статична, необхідно передати об'єкт, з якого
потрібно цю властивість отримати. Якщо вам потрібно отримати властивість
замовчуванням, не надаючи об'єкт, використовуйте функцію
[ReflectionClass::getDefaultProperties()](reflectionclass.getdefaultproperties.md).

### Значення, що повертаються

Поточне значення якості.

### Помилки

Викидає виняток
[ReflectionException](class.reflectionexception.md), якщо властивість
недоступне. Захищені та закриті властивості можна зробити доступними
функцією
[ReflectionProperty::setAccessible()](reflectionproperty.setaccessible.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `object` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::getValue()****

`<?phpclass Foo {    public static $staticProperty u003d 'foobar'; public $property u003d 'barfoo'; protected$privatePropertyu003du003d'foofoo';}$reflectionClass u003d new ReflectionClass('Foo');var_dump($reflectionClass->getProperty('staticProperty')->getValue());var_dump($reflectionClass' )->getValue(new Foo));$reflectionProperty u003d $reflectionClass->getProperty('privateProperty');$reflectionProperty->setAccessible(true);var_dump($reflectionProperty->getValue(new Fo>

Результат виконання цього прикладу:

string(6) "foobar"
string(6) "barfoo"
string(6) "foofoo"

### Дивіться також

- [ReflectionProperty::setValue()](reflectionproperty.setvalue.md) -
Встановлення значення якості
- [ReflectionProperty::setAccessible()](reflectionproperty.setaccessible.md) -
Робить властивість доступною
- [ReflectionClass::getDefaultProperties()](reflectionclass.getdefaultproperties.md) -
Повертає властивості за замовчуванням
- [ReflectionClass::getStaticPropertyValue()](reflectionclass.getstaticpropertyvalue.md) -
Повертає значення статичної властивості
