- [«
MongoDB\Driver\Server::isSecondary](mongodb-driver-server.issecondary.md)
- [MongoDB\Driver\ServerDescription::getHelloResponse
»](mongodb-driver-serverdescription.gethelloresponse.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\ServerDescription

# Клас MongoDB\Driver\ServerDescription

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\ServerDescription** є об'єктом
значення сервера, до якого підключено драйвер.
Примірники класу повертаються методами
[MongoDB\Driver\Server::getServerDescription()](mongodb-driver-server.getserverdescription.md)
і
[MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md).

## Огляд класів

final class **MongoDB\Driver\ServerDescription** {

/\* Константи \*/

const string `TYPE_UNKNOWN` u003d "Unknown";

const string `TYPE_STANDALONE` u003d "Standalone";

const string `TYPE_MONGOS` u003d "Mongos";

const string `TYPE_POSSIBLE_PRIMARY` u003d "PossiblePrimary";

const string `TYPE_RS_PRIMARY` u003d "RSPrimary";

const string `TYPE_RS_SECONDARY` u003d "RSSecondary";

const string `TYPE_RS_ARBITER` u003d "RSArbiter";

const string `TYPE_RS_OTHER` u003d "RSOther";

const string `TYPE_RS_GHOST` u003d "RSGhost";

const string `TYPE_LOAD_BALANCER` u003d "LoadBalancer";

/\* Методи \*/

final public
[getHelloResponse](mongodb-driver-serverdescription.gethelloresponse.md)():
array

final public [getHost](mongodb-driver-serverdescription.gethost.md)():
string

final public
[getLastUpdateTime](mongodb-driver-serverdescription.getlastupdatetime.md)():
int

final public [getPort](mongodb-driver-serverdescription.getport.md)():
int

final public
[getRoundTripTime](mongodb-driver-serverdescription.getroundtriptime.md)():
int

final public [getType](mongodb-driver-serverdescription.gettype.md)():
string

}

## Зумовлені константи

**`MongoDB\Driver\ServerDescription::TYPE_UNKNOWN`**
Невідомий тип сервера, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_STANDALONE`**
Тип автономного сервера, що повертається
методом [MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_MONGOS`**
Тип сервера Mongos, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_POSSIBLE_PRIMARY`**
Набір реплік можливого типу первинного сервера, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

Сервер може бути визначений як можливий первинний, якщо він ще не був
перевірено, але інша пам'ять набору реплік вважає його первинним.

**`MongoDB\Driver\ServerDescription::TYPE_RS_PRIMARY`**
Тип первинного сервера набору реплік, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_RS_SECONDARY`**
Тип вторинного сервера набору реплік, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_RS_ARBITER`**
Тип сервера арбітражу набору реплік, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

**`MongoDB\Driver\ServerDescription::TYPE_RS_OTHER`**
Набір реплік іншого типу сервера, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

Такі сервери можуть бути приховані, запускатися чи відновлюватися. Їх
не можна запитати, але їх списки хостів корисні для виявлення поточної
конфігурації набору реплік.

**`MongoDB\Driver\ServerDescription::TYPE_RS_GHOST`**
Тип сервера-примари набору реплік, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

Сервери можуть бути визначені як такі, принаймні, у трьох
ситуаціях: короткочасно під час запуску сервера; в
неініціалізований набір реплік; або коли сервер уникає (тобто.
видаляється з конфігурації набору реплік). Вони не можуть бути запитані, та
їх список хостів не може бути використаний для виявлення поточної
конфігурації набору реплік; однак клієнт може стежити за цим сервером
в надії, що він перейде у більш корисний стан.

**`MongoDB\Driver\ServerDescription::TYPE_LOAD_BALANCER`**
Тип сервера балансувальника навантаження, який повертається методом
[MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md).

## Зміст

- [MongoDB\Driver\ServerDescription::getHelloResponse](mongodb-driver-serverdescription.gethelloresponse.md)
— Повертає останню відповідь сервера "hello"
- [MongoDB\Driver\ServerDescription::getHost](mongodb-driver-serverdescription.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\ServerDescription::getLastUpdateTime](mongodb-driver-serverdescription.getlastupdatetime.md)
— Повертає час останнього оновлення сервера у мікросекундах
- [MongoDB\Driver\ServerDescription::getPort](mongodb-driver-serverdescription.getport.md)
— Повертає порт, на якому прослуховується цей сервер
- [MongoDB\Driver\ServerDescription::getRoundTripTime](mongodb-driver-serverdescription.getroundtriptime.md)
— Повертає час обходу сервера у мілісекундах
- [MongoDB\Driver\ServerDescription::getType](mongodb-driver-serverdescription.gettype.md)
— Повертає рядок, який позначає тип сервера
