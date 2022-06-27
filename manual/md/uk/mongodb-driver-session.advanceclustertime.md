- [«
MongoDB\Driver\Session::abortTransaction](mongodb-driver-session.aborttransaction.md)
- [MongoDB\Driver\Session::advanceOperationTime
»](mongodb-driver-session.advanceoperationtime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Збільшує час кластеру для сеансу

# MongoDB\Driver\Session::advanceClusterTime

(mongodb \>u003d1.4.0)

MongoDB\Driver\Session::advanceClusterTime — Збільшує час кластера
для сеансу

### Опис

final public
**MongoDB\Driver\Session::advanceClusterTime**(array\|object
`$clusterTime`): void

Збільшує час кластеру для сеансу. Якщо час кластера менший або
і поточному часу кластера сеансу, функція нічого очікувати працювати.

Використовуючи цей метод у поєднанні з
[MongoDB\Driver\Session::advanceOperationTime()](mongodb-driver-session.advanceoperationtime.md)
для копіювання кластера та часу операцій з іншого сеансу, ви можете
переконатися, що операції у цьому сеансі причинно відповідають останній
операції у іншому сеансі.

### Список параметрів

`clusterTime`
Час кластера - це документ, що містить логічну мітку часу та
сигнатуру сервера Як правило, це значення буде отримано шляхом виклику
[MongoDB\Driver\Session::getClusterTime()](mongodb-driver-session.getclustertime.md)
для іншого об'єкта сеансу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::advanceOperationTime()](mongodb-driver-session.advanceoperationtime.md) -
Збільшує час операції для сеансу
- [MongoDB\Driver\Session::getClusterTime()](mongodb-driver-session.getclustertime.md) -
Повертає час кластера для цього сеансу
