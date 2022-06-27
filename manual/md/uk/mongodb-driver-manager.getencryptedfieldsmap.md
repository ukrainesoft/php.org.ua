- [«
MongoDB\Driver\Manager::executeWriteCommand](mongodb-driver-manager.executewritecommand.md)
- [MongoDB\Driver\Manager::getReadConcern
»](mongodb-driver-manager.getreadconcern.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Повертає опцію автоматичного шифрування encryptedFieldsMap для
Manager

# MongoDB\Driver\Manager::getEncryptedFieldsMap

(mongodb \>u003d1.14.0)

MongoDB\Driver\Manager::getEncryptedFieldsMap — Повертає опцію
автоматичного шифрування encryptedFieldsMap для Manager

### Опис

final public **MongoDB\Driver\Manager::getEncryptedFieldsMap**():
array\|object\|null

Повертає параметр `encryptedFieldsMap` автоматичного шифрування для
Manager, якщо його вказано.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Параметр `encryptedFieldsMap` автоматичного шифрування для Manager або
**`null`**, якщо він не був вказаний.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Manager::\_\_construct()](mongodb-driver-manager.construct.md) -
Створює новий Manager MongoDB
