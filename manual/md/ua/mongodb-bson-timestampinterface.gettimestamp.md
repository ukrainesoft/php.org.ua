- [«
MongoDB\BSON\TimestampInterface::getIncrement](mongodb-bson-timestampinterface.getincrement.md)
- [MongoDB\BSON\TimestampInterface::\_\_toString
»](mongodb-bson-timestampinterface.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
- Повертає компонент позначки часу TimestampInterface

# MongoDB\BSON\TimestampInterface::getTimestamp

(mongodb \>u003d1.3.0)

MongoDB\BSON\TimestampInterface::getTimestamp — Повертає компонент
позначки часу TimestampInterface

### Опис

abstract public **MongoDB\BSON\TimestampInterface::getTimestamp**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає компонент позначки часу TimestampInterface.

**Увага**

У 32-бітових системах цей метод може повертати негативне число.
Хоча частини прирощення та позначки часу типу позначки часу BSON
складаються з двох 32-розрядних значень без знака, PHP не може
представляти їх на 32-розрядних платформах.

### Дивіться також

- [MongoDB\BSON\Timestamp::getTimestamp()](mongodb-bson-timestamp.gettimestamp.md) -
Повертає компонент позначки часу Timestamp
