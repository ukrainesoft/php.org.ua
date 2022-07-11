- [«
ReflectionClass::isIterateable](reflectionclass.isiterateable.md)
- [ReflectionClass::isTrait »](reflectionclass.istrait.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи є клас підкласом

# ReflectionClass::isSubclassOf

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isSubclassOf — Перевіряє, чи є клас підкласом

### Опис

public
**ReflectionClass::isSubclassOf**([ReflectionClass](class.reflectionclass.md)\|string
`$class`): bool

Перевіряє, чи клас підкласом зазначеного класу чи реалізує
чи вказаний інтерфейс.

### Список параметрів

`class`
Рядок з ім'ям класу, що перевіряється, або об'єкт класу
[ReflectionClass](class.reflectionclass.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ReflectionClass::isInterface()](reflectionclass.isinterface.md) -
Перевіряє, чи є клас інтерфейсом
- [ReflectionClass::implementsInterface()](reflectionclass.implementsinterface.md) -
Перевіряє, чи реалізується інтерфейс
- [is_subclass_of()](function.is-subclass-of.md) - Перевіряє,
чи містить об'єкт у своєму дереві предків зазначений клас чи прямо
реалізує його
- [get_parent_class()](function.get-parent-class.md) - Повертає
ім'я батьківського класу для об'єкта чи класу
