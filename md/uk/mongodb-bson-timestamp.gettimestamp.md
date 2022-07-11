- [«
MongoDB\BSON\Timestamp::getIncrement](mongodb-bson-timestamp.getincrement.md)
- [MongoDB\BSON\Timestamp::jsonSerialize
»](mongodb-bson-timestamp.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Повертає компонент позначки часу Timestamp

# MongoDB\BSON\Timestamp::getTimestamp

(mongodb \>u003d1.3.0)

MongoDB\BSON\Timestamp::getTimestamp — Повертає компонент позначки
часу Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::getTimestamp**(): int

Компонент позначки часу Timestamp - це його найбільш значущі 32 біти,
які позначають кількість секунд початку епохи Unix. Це значення
читається, як 32-розрядне ціле число без знаку з порядком байтів у
старшому порядку.

> **Примітка**: Оскільки цілий тип PHP є знаковим,
> деякі значення, набуті за допомогою цього методу, можуть
> перетворитися на негативні цілі числа на 32-бітових платформах. Для
> отримання рядкового подання беззнакового цілого можна
> скористатися шаблоном форматування %u функції
> [sprintf()](function.sprintf.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає компонент позначки часу Timestamp.

**Увага**

У 32-бітових системах цей метод може повертати негативне число.
Хоча частини прирощення та позначки часу типу позначки часу BSON
складаються з двох 32-розрядних значень без знака, PHP не може
уявити їх на 32-розрядних платформах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [» Типи BSON:
Timestamps](https://www.mongodb.com/docs/manual/reference/bson-types/#timestamps)
