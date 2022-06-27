- [« ReflectionProperty::isStatic](reflectionproperty.isstatic.md)
- [ReflectionProperty::setValue »](reflectionproperty.setvalue.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Робить властивість доступною

# ReflectionProperty::setAccessible

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

ReflectionProperty::setAccessible — Робить властивість доступною

### Опис

public **ReflectionProperty::setAccessible**(bool `$accessible`): void

Забезпечує доступ до захищеної або закритої властивості за допомогою
методів
[ReflectionProperty::getValue()](reflectionproperty.getvalue.md) та
[ReflectionProperty::setValue()](reflectionproperty.setvalue.md)

> **Примітка**: Починаючи з PHP 8.1.0, виклик методу не має сенсу; всі
> методи викликаються за промовчанням.

### Список параметрів

`accessible`
**`true`** робить властивість доступною, **`false`** - закриває доступ до
властивості.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Визначення простого класу**

` <?phpclass MyClass{    private $foo u003d 'bar';}$property u003d new ReflectionProperty("MyClass", "foo");$property->setAccessible(true);$obj u003d ne$| ->getValue($obj);echo $obj->foo;?> `

Результатом виконання цього прикладу буде щось подібне:

bar
Fatal error: Uncaught Error: Cannot access private property MyClass::$foo in /in/WJqTv:12

### Дивіться також

- [ReflectionProperty::isPrivate()](reflectionproperty.isprivate.md) -
Перевіряє, чи властивість закрита
- [ReflectionProperty::isProtected()](reflectionproperty.isprotected.md) -
Перевіряє, чи властивість захищена
