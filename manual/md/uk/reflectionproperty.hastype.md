- [«
ReflectionProperty::hasDefaultValue](reflectionproperty.hasdefaultvalue.md)
- [ReflectionProperty::isDefault »](reflectionproperty.isdefault.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Перевірити, чи заданий для властивості тип

# ReflectionProperty::hasType

(PHP 7 u003d 7.4.0, PHP 8)

ReflectionProperty::hasType — Перевірити, чи заданий для властивості тип

### Опис

public **ReflectionProperty::hasType**(): bool

Перевірити, чи заданий для якості тип.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Якщо тип заданий, то **`true`**, а якщо ні, то **`false`**.

### Приклади

**Приклад #1 Приклад використання **ReflectionProperty::hasType()****

` <?phpclass User{    public string $name;}$rp u003d new ReflectionProperty('User', 'name');var_dump($rp->hasType());?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [ReflectionProperty::getType()](reflectionproperty.gettype.md) -
Отримати тип якості
- [ReflectionProperty::isInitialized()](reflectionproperty.isinitialized.md) -
Перевірити, чи ініціалізована властивість
