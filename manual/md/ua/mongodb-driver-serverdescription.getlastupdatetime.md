- [«
MongoDB\Driver\ServerDescription::getHost](mongodb-driver-serverdescription.gethost.md)
- [MongoDB\Driver\ServerDescription::getPort
»](mongodb-driver-serverdescription.getport.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Повертає час останнього оновлення сервера у мікросекундах

# MongoDB\Driver\ServerDescription::getLastUpdateTime

(mongodb \>u003d1.13.0)

MongoDB\Driver\ServerDescription::getLastUpdateTime — Повертає час
останнього оновлення сервера в мікросекундах

### Опис

final public **MongoDB\Driver\ServerDescription::getLastUpdateTime**():
int

Повертає час останнього оновлення сервера у мікросекундах.

> **Примітка**: Повертане значення є монотонною
> мітку часу, що починається у довільній точці. Як таке,
> воно підходить тільки для порівняння з іншими значеннями, що повертаються
> з функції **MongoDB\Driver\ServerDescription::getLastUpdateTime()**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час останнього оновлення сервера у мікросекундах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
