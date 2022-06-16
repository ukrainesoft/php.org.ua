- [« ReflectionProperty::isDefault](reflectionproperty.isdefault.md)
- [ReflectionProperty::isPrivate »](reflectionproperty.isprivate.md)

- [PHP Manual](index.md)
- [ReflectionProperty](class.reflectionproperty.md)
- Перевірити, чи ініціалізована властивість

# ReflectionProperty::isInitialized

(PHP 7 u003d 7.4.0, PHP 8)

ReflectionProperty::isInitialized — Перевірити, чи ініціалізовано
властивість

### Опис

public **ReflectionProperty::isInitialized**(?object `$object` u003d
**`null`**): bool

Перевіряє, чи ініціалізована властивість.

### Список параметрів

`object`
Якщо властивість не статична, необхідно передати об'єкт, для
якого буде проводитись перевірка.

### Значення, що повертаються

Повертає **`false`** для типізованих властивостей, яких не було
присвоєно значення і властивостей, яких явно застосували функцію
[unset()](function.unset.md). Для решти властивостей повертає
**`true`**.

### Помилки

Вкидає виняток [ReflectionException](class.reflectionexception.md)
якщо властивість недоступна. Доступ до protected і private властивостей можна
отримати за допомогою
[ReflectionProperty::setAccessible()](reflectionproperty.setaccessible.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `object` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання
**ReflectionProperty::isInitialized()****

` <?phpclass User{    public string $name;}$rp u003d new ReflectionProperty('User', 'name');$user u003d new User;var_dump($rp->isInitialized($user));$user-> nameu003du003d'Nikita';var_dump($rp->isInitialized($user));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [ReflectionProperty::hasType()](reflectionproperty.hastype.md) -
Перевірити, чи заданий для властивості тип
