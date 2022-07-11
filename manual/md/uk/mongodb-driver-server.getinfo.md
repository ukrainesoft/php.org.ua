- [«
MongoDB\Driver\Server::getHost](mongodb-driver-server.gethost.md)
- [MongoDB\Driver\Server::getLatency
»](mongodb-driver-server.getlatency.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Повертає масив інформації, що описує сервер

# MongoDB\Driver\Server::getInfo

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::getInfo - Повертає масив інформації,
описуючий сервер

### Опис

final public **MongoDB\Driver\Server::getInfo**(): array

Повертає масив інформації, що описує сервер. Цей масив отриманий з
останньої відповіді команди
[» hello](https://www.mongodb.com/docs/manual/reference/command/hello/),
отриманого за допомогою [» моніторингу
сервера](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst).

> **Примітка**:
>
> Коли драйвер підключено до балансувальника навантаження, метод поверне відповідь
> на команду
> [» hello](https://www.mongodb.com/docs/manual/reference/command/hello/)
> від резервного сервера під час початкового підтвердження з'єднання. Це
> відрізняється від інших методів (наприклад,
> [MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md)),
> які повертають інформацію про балансувальника навантаження.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив інформації, що описує сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\Driver\Server::getInfo()****

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017/');$rp u003d new MongoDB\Driver\ReadPreference('primary');$server u003d $manager->selectServer( $rp);var_dump($server->getInfo());?> `

Результатом виконання цього прикладу буде щось подібне:

array(23) {
["helloOk"]u003d>
bool(true)
["topologyVersion"]u003d>
array(2) {
["processId"]u003d>
object(MongoDB\BSON\ObjectId)#4 (1) {
["oid"]u003d>
string(24) "617b6d696a3a89d2f77e6df0"
}
["counter"]u003d>
int(6)
}
["hosts"]u003d>
array(1) {
[0]u003d>
string(15) "localhost:27017"
}
["setName"]u003d>
string(3) "rs0"
["setVersion"]u003d>
int(1)
["ismaster"]u003d>
bool(true)
["secondary"]u003d>
bool(false)
["primary"]u003d>
string(15) "localhost:27017"
["me"]u003d>
string(15) "localhost:27017"
["electionId"]u003d>
object(MongoDB\BSON\ObjectId)#5 (1) {
["oid"]u003d>
string(24) "7fffffff000000000000001"
}
["lastWrite"]u003d>
array(4) {
["opTime"]u003d>
array(2) {
["ts"]u003d>
object(MongoDB\BSON\Timestamp)#6 (2) {
["increment"]u003d>
string(1) "1"
["timestamp"]u003d>
string(10) "1635478989"
}
["t"]u003d>
int(1)
}
["lastWriteDate"]u003d>
object(MongoDB\BSON\UTCDateTime)#7 (1) {
["milliseconds"]u003d>
string(13) "1635478989000"
}
["majorityOpTime"]u003d>
array(2) {
["ts"]u003d>
object(MongoDB\BSON\Timestamp)#8 (2) {
["increment"]u003d>
string(1) "1"
["timestamp"]u003d>
string(10) "1635478989"
}
["t"]u003d>
int(1)
}
["majorityWriteDate"]u003d>
object(MongoDB\BSON\UTCDateTime)#9 (1) {
["milliseconds"]u003d>
string(13) "1635478989000"
}
}
["maxBsonObjectSize"]u003d>
int(16777216)
["maxMessageSizeBytes"]u003d>
int(48000000)
["maxWriteBatchSize"]u003d>
int(100000)
["localTime"]u003d>
object(MongoDB\BSON\UTCDateTime)#10 (1) {
["milliseconds"]u003d>
string(13) "1635478992136"
}
["logicalSessionTimeoutMinutes"]u003d>
int(30)
["connectionId"]u003d>
int(3)
["minWireVersion"]u003d>
int(0)
["maxWireVersion"]u003d>
int(13)
["readOnly"]u003d>
bool(false)
["ok"]u003d>
float(1)
["$clusterTime"]u003d>
array(2) {
["clusterTime"]u003d>
object(MongoDB\BSON\Timestamp)#11 (2) {
["increment"]u003d>
string(1) "1"
["timestamp"]u003d>
string(10) "1635478989"
}
["signature"]u003d>
array(2) {
["hash"]u003d>
object(MongoDB\BSON\Binary)#12 (2) {
["data"]u003d>
string(20) ""
["type"]u003d>
int(0)
}
["keyId"]u003d>
int(0)
}
}
["operationTime"]u003d>
object(MongoDB\BSON\Timestamp)#13 (2) {
["increment"]u003d>
string(1) "1"
["timestamp"]u003d>
string(10) "1635478989"
}
}

### Список змін

| Версія | Опис |
|---------------------|--------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| PECL mongodb 1.11.0 | Коли драйвер підключений до підсистеми балансування навантаження, метод повертає у відповідь команду `hello` допоміжного сервера при початковому підтвердження з'єднання. |

### Дивіться також

- [MongoDB\Driver\ServerDescription::getHelloResponse()](mongodb-driver-serverdescription.gethelloresponse.md) -
Повертає останню відповідь сервера "hello"
- команда
[»Hello](https://www.mongodb.com/docs/manual/reference/command/hello/)
у посібнику MongoDB
- [»Керівництво з виявлення та моніторингу
серверів](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst)
