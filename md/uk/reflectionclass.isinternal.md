- [« ReflectionClass::isInterface](reflectionclass.isinterface.md)
- [ReflectionClass::isIterable »](reflectionclass.isiterable.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи є клас вбудованим у модуль чи ядро

# ReflectionClass::isInternal

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInternal — Перевіряє, чи є клас вбудованим у
модуль або в ядро

### Опис

public **ReflectionClass::isInternal**(): bool

Перевіряє, чи клас вбудований в модуль або в ядро, а не
користувальницьким.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isInternal()****

` <?php$internalclass u003d new ReflectionClass('ReflectionClass');class Apple {}$userclass u003d new ReflectionClass('Apple');var_dump($internalclass->isInternal());var_dump($userclass->isInternal() );?> `

Результат виконання цього прикладу:

bool(true)
bool(false)

### Дивіться також

- [ReflectionClass::isUserDefined()](reflectionclass.isuserdefined.md) -
Перевіряє, чи є клас користувача
