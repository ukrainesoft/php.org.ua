- [«
MongoDB\Driver\CursorInterface::isDead](mongodb-driver-cursorinterface.isdead.md)
- [MongoDB\Driver\CursorInterface::toArray
»](mongodb-driver-cursorinterface.toarray.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Задати порівняння типів для десеріалізації BSON

# MongoDB\Driver\CursorInterface::setTypeMap

(mongodb \>u003d1.6.0)

MongoDB\Driver\CursorInterface::setTypeMap — Задати порівняння типів
для десеріалізації BSON

### Опис

abstract public **MongoDB\Driver\CursorInterface::setTypeMap**(array
`$typemap`): void

Задати [порівняння
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps)
для використання при десеріалізації результатів BSON значення PHP.

### Список параметрів

`typeMap` (array)
[Конфігурація картки
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor::setTypeMap()](mongodb-driver-cursor.settypemap.md) -
Встановлює карту типу для десеріалізації BSON
- [Постійні дані](mongodb.persistence.md)
