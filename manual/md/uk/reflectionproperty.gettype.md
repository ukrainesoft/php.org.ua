- [« ReflectionProperty::getName](reflectionproperty.getname.md)
- [ReflectionProperty::getValue »](reflectionproperty.getvalue.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Отримати тип якості

# ReflectionProperty::getType

(PHP 7 u003d 7.4.0, PHP 8)

ReflectionProperty::getType — Отримати тип якості

### Опис

public **ReflectionProperty::getType**():
?[ReflectionType](class.reflectiontype.md)

Повертає тип якості.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [ReflectionType](class.reflectiontype.md), якщо для
властивості заданий тип, або **`null`** якщо ні.

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::getType()****

` <?phpclass User{    public string $name;}$rp u003d new ReflectionProperty('User', 'name');echo $rp->getType()->getName();?> `

Результат виконання цього прикладу:

string

### Дивіться також

- [ReflectionProperty::hasType()](reflectionproperty.hastype.md) -
Перевірити, чи заданий для властивості тип
- [ReflectionProperty::isInitialized()](reflectionproperty.isinitialized.md) -
Перевірити, чи ініціалізована властивість
