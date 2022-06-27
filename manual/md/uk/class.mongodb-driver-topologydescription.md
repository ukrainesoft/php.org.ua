- [«
MongoDB\Driver\ServerDescription::getType](mongodb-driver-serverdescription.gettype.md)
- [MongoDB\Driver\TopologyDescription::getServers
»](mongodb-driver-topologydescription.getservers.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\TopologyDescription

# Клас MongoDB\Driver\TopologyDescription

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\TopologyDescription** є об'єктом
значення, що представляє топологію, до якої підключено драйвер.
Примірники класу повертаються методами
[MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md).

## Огляд класів

final class **MongoDB\Driver\TopologyDescription** {

/\* Константи \*/

const string `TYPE_UNKNOWN` u003d "Unknown";

const string `TYPE_SINGLE` u003d "Single";

const string `TYPE_SHARDED` u003d "Sharded";

const string `TYPE_REPLICA_SET_NO_PRIMARY` u003d "ReplicaSetNoPrimary";

const string `TYPE_REPLICA_SET_WITH_PRIMARY` u003d "ReplicaSetWithPrimary";

const string `TYPE_LOAD_BALANCED` u003d "LoadBalanced";

/\* Методи \*/

final public
[getServers](mongodb-driver-topologydescription.getservers.md)():
array

final public
[getType](mongodb-driver-topologydescription.gettype.md)(): string

final public
[hasReadableServer](mongodb-driver-topologydescription.hasreadableserver.md)(?[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
`$readPreference` u003d **`null`**): bool

final public
[hasWritableServer](mongodb-driver-topologydescription.haswritableserver.md)():
bool

}

## Зумовлені константи

**`MongoDB\Driver\TopologyDescription::TYPE_UNKNOWN`**
Невідомий тип топології, який повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

**`MongoDB\Driver\TopologyDescription::TYPE_SINGLE`**
Одиночний сервер (тобто пряме з'єднання), що повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

**`MongoDB\Driver\TopologyDescription::TYPE_SHARDED`**
Кластер, що розділяється, повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

**`MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_NO_PRIMARY`**
Набір реплік без первинного сервера, який повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

**`MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_WITH_PRIMARY`**
Набір реплік з первинним сервером, який повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

**`MongoDB\Driver\TopologyDescription::TYPE_LOAD_BALANCED`**
Збалансована за навантаженням топологія, що повертається методом
[MongoDB\Driver\TopologyDescription::getType()](mongodb-driver-topologydescription.gettype.md).

## Зміст

- [MongoDB\Driver\TopologyDescription::getServers](mongodb-driver-topologydescription.getservers.md)
— Повертає сервери у топології
- [MongoDB\Driver\TopologyDescription::getType](mongodb-driver-topologydescription.gettype.md)
— Повертає рядок, що позначає тип топології
- [MongoDB\Driver\TopologyDescription::hasReadableServer](mongodb-driver-topologydescription.hasreadableserver.md)
— Повертає, чи є у топології сервер, доступний для читання
- [MongoDB\Driver\TopologyDescription::hasWritableServer](mongodb-driver-topologydescription.haswritableserver.md)
— Повертає, чи є у топології сервер, доступний для запису
