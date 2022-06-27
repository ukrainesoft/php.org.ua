- [« ReflectionClass::isEnum](reflectionclass.isenum.md)
- [ReflectionClass::isInstance »](reflectionclass.isinstance.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи є клас остаточним (final)

# ReflectionClass::isFinal

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isFinal — Перевіряє, чи є клас остаточним
(final)

### Опис

public **ReflectionClass::isFinal**(): bool

Перевіряє, чи клас є остаточним (final).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isFinal()****

` <?phpclass       TestClass { }final class TestFinalClass { }$normalClass u003d new ReflectionClass('TestClass');$finalClass  u003du003dnew ReflectionClass('TestFinal> >isFinal());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [ReflectionClass::isAbstract()](reflectionclass.isabstract.md) -
Перевіряє, чи є клас абстрактним
- [Ключове слово "final"] (language.oop5.final.md)
