- [«
MongoDB\Driver\Session::\_\_construct](mongodb-driver-session.construct.md)
- [MongoDB\Driver\Session::getClusterTime
»](mongodb-driver-session.getclustertime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Завершує сеанс

# MongoDB\Driver\Session::endSession

(mongodb \>u003d1.5.0)

MongoDB\Driver\Session::endSession - Завершує сеанс

### Опис

final public **MongoDB\Driver\Session::endSession**(): void

Цей метод закриває існуючий сеанс. Якщо транзакція була пов'язана з
цим сеансом, транзакцію буде перервано. Після виклику цього методу
програми не повинні викликати інші методи у сеансі.

> **Примітка**: Сесії також закриті під час збору сміття. Не повинно
> При необхідності викликати цей метод за нормальних обставин.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md) -
Запуск нового клієнтського сеансу для використання з цим клієнтом
- [MongoDB\Driver\Session::abortTransaction()](mongodb-driver-session.aborttransaction.md) -
Перериває транзакцію
- [MongoDB\Driver\Session::commitTransaction()](mongodb-driver-session.committransaction.md) -
Фіксує транзакцію
- [MongoDB\Driver\Session::startTransaction()](mongodb-driver-session.starttransaction.md) -
Запускає транзакцію
