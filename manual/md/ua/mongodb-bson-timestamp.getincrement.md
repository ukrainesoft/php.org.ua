- [«
MongoDB\BSON\Timestamp::\_\_construct](mongodb-bson-timestamp.construct.md)
- [MongoDB\BSON\Timestamp::getTimestamp
»](mongodb-bson-timestamp.gettimestamp.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Повертає компонент збільшення Timestamp

# MongoDB\BSON\Timestamp::getIncrement

(mongodb \>u003d1.3.0)

MongoDB\BSON\Timestamp::getIncrement — Повертає компонент збільшення
Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::getIncrement**(): int

Компонент збільшення Timestamp - це його молодші 32 біти, які
позначають порядковий номер збільшення для операцій протягом даної
секунди. Це значення читається як 32-розрядне ціле число без знаку з
порядком байтів у старшому порядку.

> **Примітка**: Оскільки цілий тип PHP є знаковим,
> деякі значення, набуті за допомогою цього методу, можуть
> перетворитися на негативні цілі числа на 32-бітових платформах. Для
> отримання рядкового подання беззнакового цілого можна
> скористатися шаблоном форматування %u функції
> [sprintf()](function.sprintf.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає компонент збільшення Timestamp.

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
