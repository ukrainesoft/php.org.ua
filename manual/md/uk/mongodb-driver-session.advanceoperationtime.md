- [«
MongoDB\Driver\Session::advanceClusterTime](mongodb-driver-session.advanceclustertime.md)
- [MongoDB\Driver\Session::commitTransaction
»](mongodb-driver-session.committransaction.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Збільшує час операції для сеансу

# MongoDB\Driver\Session::advanceOperationTime

(mongodb \>u003d1.4.0)

MongoDB\Driver\Session::advanceOperationTime — Збільшує час
операції для сеансу

### Опис

final public
**MongoDB\Driver\Session::advanceOperationTime**([MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
`$operationTime`): void

Збільшує час операції для сеансу. Якщо час операції менший або
і поточному часу сеансу, функція нічого очікувати працювати.

Використовуючи цей метод у поєднанні з
[MongoDB\Driver\Session::advanceClusterTime()](mongodb-driver-session.advanceclustertime.md)
для копіювання операції та часу кластеризації з іншого сеансу, ви
можете гарантувати, що операції на цьому сеансі причинно узгоджуються з
останньою операцією у іншому сеансі.

### Список параметрів

`operationTime`
Час операції є логічною оцінкою часу. Як правило, це
значення буде отримано шляхом виклику
[MongoDB\Driver\Session::getOperationTime()](mongodb-driver-session.getoperationtime.md)
для іншого об'єкта сеансу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::advanceClusterTime()](mongodb-driver-session.advanceclustertime.md) -
Збільшує час кластера для сеансу
- [MongoDB\Driver\Session::getClusterTime()](mongodb-driver-session.getclustertime.md) -
Повертає час кластера для цього сеансу
