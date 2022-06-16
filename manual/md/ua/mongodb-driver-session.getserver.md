- [«
MongoDB\Driver\Session::getOperationTime](mongodb-driver-session.getoperationtime.md)
- [MongoDB\Driver\Session::getTransactionOptions
»](mongodb-driver-session.gettransactionoptions.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає сервер, до якого прив'язана поточна сесія

# MongoDB\Driver\Session::getServer

(mongodb \>u003d1.6.0)

MongoDB\Driver\Session::getServer - Повертає сервер до якого
прив'язана поточна сесія

### Опис

final public **MongoDB\Driver\Session::getServer**():
?[MongoDB\Driver\Server](class.mongodb-driver-server.md)

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md), до
котрому прив'язана поточна сесія. Якщо сесія не прив'язана до сервера,
то буде повернено **`null`**.

Прив'язка сесії в основному використовується для шардованих транзакцій,
тому що всі команди повинні йти на один і той самий екземпляр mongos. Цей
метод призначений для використання в бібліотеках, побудованих поверх
модуля, щоб можна було закріпити сервер, а не вибирати сервер для
кожної наступної команди.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md) до
якому прикріплено сесію. Або **`null`**, якщо сесія не прикріплена
ні до якого сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
