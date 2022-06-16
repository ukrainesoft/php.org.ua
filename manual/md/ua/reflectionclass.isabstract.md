- [« ReflectionClass::inNamespace](reflectionclass.innamespace.md)
- [ReflectionClass::isAnonymous »](reflectionclass.isanonymous.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи є клас абстрактним

# ReflectionClass::isAbstract

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isAbstract — Перевіряє, чи клас є абстрактним

### Опис

public **ReflectionClass::isAbstract**(): bool

Перевіряє, чи клас є абстрактним.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isAbstract()****

` <?phpclass          TestClass { }abstract class TestAbstractClass { }$testClass     u003d new ReflectionClass('TestClass');$abstractClass u003d new ReflectionClass('TestAbstractClass');var_dump($testClass->isAbstract());var_dump($abstractClass- >isAbstract());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [ReflectionClass::isInterface()](reflectionclass.isinterface.md) -
Перевіряє, чи є клас інтерфейсом
- [Абстрактні класи](language.oop5.abstract.md)
