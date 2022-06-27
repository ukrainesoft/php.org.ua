- [« PDO::getAttribute](pdo.getattribute.md)
- [PDO::inTransaction »](pdo.intransaction.md)

- [PHP Manual](index.md)
- [PDO](class.pdo.md)
- Повертає масив доступних драйверів PDO

# PDO::getAvailableDrivers

#pdo_drivers

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 1.0.3)

PDO::getAvailableDrivers -- pdo_drivers — Повертає масив доступних
драйверів PDO

### Опис

public static **PDO::getAvailableDrivers**(): array

**pdo_drivers**(): array

Ця функція повертає всі драйвери PDO, що є в даний час,
які можна використовувати в `DSN`-параметрі
[PDO::\_\_construct()](pdo.construct.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція **PDO::getAvailableDrivers()** повертає масив імен драйверів
PDO. Якщо немає драйверів, повертається порожній масив.

### Приклади

**Приклад #1 Приклад виконання **PDO::getAvailableDrivers()****

` <?phpprint_r(PDO::getAvailableDrivers());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> mysql
[1] u003d> sqlite
)
