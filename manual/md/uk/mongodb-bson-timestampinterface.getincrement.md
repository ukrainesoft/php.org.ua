- [«
MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
- [MongoDB\BSON\TimestampInterface::getTimestamp
»](mongodb-bson-timestampinterface.gettimestamp.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
- Повертає інкрементний компонент TimestampInterface

# MongoDB\BSON\TimestampInterface::getIncrement

(mongodb \>u003d1.3.0)

MongoDB\BSON\TimestampInterface::getIncrement — Повертає інкрементний
компонент TimestampInterface

### Опис

abstract public **MongoDB\BSON\TimestampInterface::getIncrement**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає інкрементний компонент TimestampInterface.

**Увага**

У 32-бітових системах цей метод може повертати негативне число.
Хоча частини прирощення та позначки часу типу позначки часу BSON
складаються з двох 32-розрядних значень без знака, PHP не може
представляти їх на 32-розрядних платформах.

### Дивіться також

- [MongoDB\BSON\Timestamp::getIncrement()](mongodb-bson-timestamp.getincrement.md) -
Повертає компонент збільшення Timestamp
