- [«
ReflectionClass::isInstantiable](reflectionclass.isinstantiable.md)
- [ReflectionClass::isInternal »](reflectionclass.isinternal.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи є клас інтерфейсом

# ReflectionClass::isInterface

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInterface — Перевіряє, чи клас є інтерфейсом

### Опис

public **ReflectionClass::isInterface**(): bool

Перевіряє, чи є клас інтерфейсом чи ні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isInterface()****

` <?phpinterface SomeInterface {    public function interfaceMethod();}$class u003d new ReflectionClass('SomeInterface');var_dump($class->isInterface());?> `

Результат виконання цього прикладу:

bool(true)

### Дивіться також

- [ReflectionClass::isInstance()](reflectionclass.isinstance.md) -
Перевіряє, чи об'єкт належить класу
