- [«
MongoDB\BSON\ObjectId::\_\_construct](mongodb-bson-objectid.construct.md)
- [MongoDB\BSON\ObjectId::jsonSerialize
»](mongodb-bson-objectid.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- Повертає мітку часу ObjectId

# MongoDB\BSON\ObjectId::getTimestamp

(mongodb \>u003d1.2.0)

MongoDB\BSON\ObjectId::getTimestamp — Повертає позначку часу ObjectId

### Опис

final public **MongoDB\BSON\ObjectId::getTimestamp**(): int

Компонент мітки часу в ObjectId - це його найбільш значущі 32 біти,
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

Повертає позначку часу ObjectId.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\ObjectId::getTimestamp()****

` <?phpvar_dump((new MongoDB\BSON\ObjectId())->getTimestamp());var_dump((new MongoDB\BSON\ObjectId('0000002a00000000000000000'))->getTimestamp()

Результатом виконання цього прикладу буде щось подібне:

integer(1484854719)
integer(42)

### Дивіться також

- [» Довідка по
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
- [» Типи BSON:
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
