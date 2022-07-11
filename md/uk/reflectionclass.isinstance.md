- [« ReflectionClass::isFinal](reflectionclass.isfinal.md)
- [ReflectionClass::isInstantiable
»](reflectionclass.isinstantiable.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи належить об'єкт класу

# ReflectionClass::isInstance

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInstance — Перевіряє, чи об'єкт належить класу

### Опис

public **ReflectionClass::isInstance**(object `$object`): bool

Перевіряє, чи є об'єкт екземпляром класу.

### Список параметрів

`object`
Об'єкт, що перевіряється.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::isInstance()** та його
аналогів**

` <?php// Приклад використання$class u003d new ReflectionClass('Foo');if ($class->isInstance($arg)) {    echo "Yes";}// Аналогічно цьогоif ($ar   "Yes";}// Аналогічно цьомуif (is_a($arg, 'Foo')) {   echo "Yes";}?> `

Результатом виконання цього прикладу буде щось подібне:

Yes
Yes
Yes

### Дивіться також

- [ReflectionClass::isInterface()](reflectionclass.isinterface.md) -
Перевіряє, чи є клас інтерфейсом
- [Оператори перевірки типу (instanceof)](language.operators.type.md)
- [Інтерфейси об'єктів](language.oop5.interfaces.md)
- [is_a()](function.is-a.md) - Перевіряє, чи об'єкт належить до
даному класу чи є цей клас одним з його батьків
