- [«
MongoDB\Driver\CursorInterface::toArray](mongodb-driver-cursorinterface.toarray.md)
- [MongoDB\Driver\Server::\_\_construct
»](mongodb-driver-server.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\Server

# Клас MongoDB\Driver\Server

(mongodb \>u003d1.0.0)

## Вступ

## Огляд класів

final class **MongoDB\Driver\Server** {

/\* Константи \*/

const int `TYPE_UNKNOWN` u003d 0;

const int `TYPE_STANDALONE` u003d 1;

const int `TYPE_MONGOS` u003d 2;

const int `TYPE_POSSIBLE_PRIMARY` u003d 3;

const int `TYPE_RS_PRIMARY` u003d 4;

const int `TYPE_RS_SECONDARY` u003d 5;

const int `TYPE_RS_ARBITER` u003d 6;

const int `TYPE_RS_OTHER` u003d 7;

const int `TYPE_RS_GHOST` u003d 8;

const int `TYPE_LOAD_BALANCER` u003d 9;

/\* Методи \*/

final private [\_\_construct](mongodb-driver-server.construct.md)()

final public
[executeBulkWrite](mongodb-driver-server.executebulkwrite.md)(string
`$namespace`,
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) `$bulk`,
array `$options` u003d array()):
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

final public
[executeCommand](mongodb-driver-server.executecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeQuery](mongodb-driver-server.executequery.md)(string
`$namespace`, [MongoDB\Driver\Query](class.mongodb-driver-query.md)
`$query`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeReadCommand](mongodb-driver-server.executereadcommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeReadWriteCommand](mongodb-driver-server.executereadwritecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeWriteCommand](mongodb-driver-server.executewritecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public [getHost](mongodb-driver-server.gethost.md)(): string

final public [getInfo](mongodb-driver-server.getinfo.md)(): array

final public [getLatency](mongodb-driver-server.getlatency.md)():
?integer

final public [getPort](mongodb-driver-server.getport.md)(): int

final public
[getServerDescription](mongodb-driver-server.getserverdescription.md)():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

final public [getTags](mongodb-driver-server.gettags.md)(): array

final public [getType](mongodb-driver-server.gettype.md)(): int

final public [isArbiter](mongodb-driver-server.isarbiter.md)(): bool

final public [isHidden](mongodb-driver-server.ishidden.md)(): bool

final public [isPassive](mongodb-driver-server.ispassive.md)(): bool

final public [isPrimary](mongodb-driver-server.isprimary.md)(): bool

final public [isSecondary](mongodb-driver-server.issecondary.md)():
bool

}

## Зумовлені константи

**`MongoDB\Driver\Server::TYPE_UNKNOWN`**
Невідомий тип сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_STANDALONE`**
Автономний тип сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_MONGOS`**
Тип сервера Mongos, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_POSSIBLE_PRIMARY`**
Тип набору реплік можливого основного сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

Сервер може бути ідентифікований як можливий основний, якщо він ще не
був перевірений, але інша пам'ять реплік набору думає, що він є
основним.

**`MongoDB\Driver\Server::TYPE_RS_PRIMARY`**
Тип набору реплік основного сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_RS_SECONDARY`**
Тип набору реплік вторинного сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_RS_ARBITER`**
Тип набору реплік арбітра сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

**`MongoDB\Driver\Server::TYPE_RS_OTHER`**
Інший тип набору реплік сервера, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

Такі сервери можуть бути приховані, запускаються або відновлюються. Вони
не можуть бути запитані, але їх списки хостів корисні для виявлення
поточної конфігурації набору реплік.

**`MongoDB\Driver\Server::TYPE_RS_GHOST`**
Примарний тип набору реплік, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

Сервери можуть бути ідентифіковані як такі, принаймні у трьох
ситуаціях: коротко під час запуску сервера; у неініціалізованому
наборі реплік; або коли сервер тримається осторонь (тобто видаляється з
конфігурації набору реплік). Вони не можуть бути запитані, та їх список
хостів не може бути використаний для виявлення поточної конфігурації
набору реплік; однак клієнт може відслідковувати цей сервер, сподіваючись,
що він переходить у більш корисний стан.

**`MongoDB\Driver\Server::TYPE_LOAD_BALANCER`**
Тип сервера балансувальника навантаження, що повертається
[MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md).

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------|
| PECL mongodb 1.11.0 | Додано константу **`MongoDB\Driver\Server::TYPE_LOAD_BALANCER`**. |

## Зміст

- [MongoDB\Driver\Server::\_\_construct](mongodb-driver-server.construct.md)
- Створює новий Server (не використовується)
- [MongoDB\Driver\Server::executeBulkWrite](mongodb-driver-server.executebulkwrite.md)
— Виконати одну або кілька операцій запису на сервері
- [MongoDB\Driver\Server::executeCommand](mongodb-driver-server.executecommand.md)
— Виконати команду бази даних на сервері
- [MongoDB\Driver\Server::executeQuery](mongodb-driver-server.executequery.md)
— Виконує запит до бази даних на сервері
- [MongoDB\Driver\Server::executeReadCommand](mongodb-driver-server.executereadcommand.md)
- Виконує команду бази даних, яка читає на сервері
- [MongoDB\Driver\Server::executeReadWriteCommand](mongodb-driver-server.executereadwritecommand.md)
— Виконує команду бази даних, яка читає та пише на сервері
- [MongoDB\Driver\Server::executeWriteCommand](mongodb-driver-server.executewritecommand.md)
- Виконує команду бази даних, яка пише на сервері
- [MongoDB\Driver\Server::getHost](mongodb-driver-server.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Server::getInfo](mongodb-driver-server.getinfo.md)
— Повертає масив інформації, що описує сервер
- [MongoDB\Driver\Server::getLatency](mongodb-driver-server.getlatency.md)
— Повертає затримку сервера у мілісекундах
- [MongoDB\Driver\Server::getPort](mongodb-driver-server.getport.md)
— Повертає порт, який слухає сервер
- [MongoDB\Driver\Server::getServerDescription](mongodb-driver-server.getserverdescription.md)
— Повертає ServerDescription сервера
- [MongoDB\Driver\Server::getTags](mongodb-driver-server.gettags.md)
— Повертає масив тегів, що описують сервер у наборі реплік
- [MongoDB\Driver\Server::getType](mongodb-driver-server.gettype.md)
— Повертає ціле число, яке позначає тип сервера
- [MongoDB\Driver\Server::isArbiter](mongodb-driver-server.isarbiter.md)
— Перевіряє, чи сервер є членом-арбітром у наборі реплік
- [MongoDB\Driver\Server::isHidden](mongodb-driver-server.ishidden.md)
— Перевіряє, чи сервер є прихованим членом набору реплік
- [MongoDB\Driver\Server::isPassive](mongodb-driver-server.ispassive.md)
— Перевіряє, чи сервер є пасивним членом набору реплік
- [MongoDB\Driver\Server::isPrimary](mongodb-driver-server.isprimary.md)
— Перевіряє, чи сервер є основним членом набору реплік
- [MongoDB\Driver\Server::isSecondary](mongodb-driver-server.issecondary.md)
— Перевіряє, чи цей сервер є другорядним членом набору.
реплік
