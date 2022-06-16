- [« ZMQDevice::setTimerTimeout](zmqdevice.settimertimeout.md)
- [Вступ »](intro.zookeeper.md)

- [PHP Manual](index.md)
- [Інші служби](refs.remote.other.md)
- ZooKeeper

# ZooKeeper

- [Вступ](intro.zookeeper.md)
- [Встановлення та налаштування](zookeeper.setup.md)
- [Вимоги](zookeeper.requirements.md)
- [Установка](zookeeper.installation.md)
- [Налаштування під час виконання](zookeeper.configuration.md)
- [Типи ресурсів](zookeeper.resources.md)
- [Предвизначені константи](zookeeper.constants.md)
- [Функції ZooKeeper](ref.zookeeper.md)
- [zookeeper_dispatch](function.zookeeper-dispatch.md) — Викликати
callback-функції для операцій, що очікують
- [Zookeeper](class.zookeeper.md) - Клас Zookeeper
- [Zookeeper::addAuth](zookeeper.addauth.md) — Вказує облікові
дані програми
- [Zookeeper::close](zookeeper.close.md) - Закриває обробник
zookeeper та звільняє будь-які ресурси
- [Zookeeper::connect](zookeeper.connect.md) — Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::\_\_construct](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::create](zookeeper.create.md) — Створює синхронно
вузол
- [Zookeeper::delete](zookeeper.delete.md) — Видаляє синхронно
вузол у zookeeper
- [Zookeeper::exists](zookeeper.exists.md) — Синхронно перевіряє
наявність вузла в zookeeper
- [Zookeeper::get](zookeeper.get.md) - Синхронно отримує
дані, пов'язані з вузлом
- [Zookeeper::getAcl](zookeeper.getacl.md) - Синхронно отримує
ACL, пов'язаний із вузлом
- [Zookeeper::getChildren](zookeeper.getchildren.md) - Виводить
список нащадків вузла синхронно
- [Zookeeper::getClientId](zookeeper.getclientid.md) -
Повертає ідентифікатор сесії клієнта, дійсний лише у
тому випадку, якщо підключення в даний час підключені (тобто.
останній стан спостерігача - ZOO_CONNECTED_STATE)
- [Zookeeper::getConfig](zookeeper.getconfig.md) — Отримує
екземпляр ZookeeperConfig
- [Zookeeper::getRecvTimeout](zookeeper.getrecvtimeout.md) -
Повертає час очікування для сесії, дійсний, тільки
якщо підключення в даний час підключено (тобто останнє
стан спостерігача – ZOO_CONNECTED_STATE). Це значення може
змінити після повторного підключення до сервера
- [Zookeeper::getState](zookeeper.getstate.md) — Отримує
стан з'єднання zookeeper
- [Zookeeper::isRecoverable](zookeeper.isrecoverable.md)
Перевіряє, чи можна відновити поточний стан підключення
ZooKeeper
- [Zookeeper::set](zookeeper.set.md) — Встановлює дані,
пов'язані з вузлом
- [Zookeeper::setAcl](zookeeper.setacl.md) — Встановлює ACL,
пов'язаний з вузлом синхронно
- [Zookeeper::setDebugLevel](zookeeper.setdebuglevel.md)
Встановлює рівень логування для бібліотеки
- [Zookeeper::setDeterministicConnOrder](zookeeper.setdeterministicconnorder.md)
— Увімкнення/вимкнення рандомізації порядку кінцевих точок
кворуму
- [Zookeeper::setLogStream](zookeeper.setlogstream.md) -
Встановлює потік, який використовуватиметься бібліотекою
для логування
- [Zookeeper::setWatcher](zookeeper.setwatcher.md)
Встановлює функцію спостерігача
- [ZookeeperConfig](class.zookeeperconfig.md) - Клас
ZookeeperConfig
- [ZookeeperConfig::add](zookeeperconfig.add.md) — Додає
сервери в ансамбль
- [ZookeeperConfig::get](zookeeperconfig.get.md) — Синхронно
отримує останню підтверджену конфігурацію кластера
ZooKeeper, про яку відомо серверу, до якого підключено
клієнт
- [ZookeeperConfig::remove](zookeeperconfig.remove.md) — Видаляє
сервери з ансамблю
- [ZookeeperConfig::set](zookeeperconfig.set.md) — Змінює
склад ансамблю ZK та ролі його учасників
- [ZookeeperException](class.zookeeperexception.md) - Клас
ZookeeperException
- [ZookeeperAuthenticationException](class.zookeeperauthenticationexception.md)
- Клас ZookeeperAuthenticationException
- [ZookeeperConnectionException](class.zookeeperconnectionexception.md)
- Клас ZookeeperConnectionException
- [ZookeeperMarshallingException](class.zookeepermarshallingexception.md)
- Клас ZookeeperMarshallingException
- [ZookeeperNoNodeException](class.zookeepernonodeexception.md) -
Клас ZookeeperNoNodeException
- [ZookeeperOperationTimeoutException](class.zookeeperoperationtimeoutexception.md)
- Клас ZookeeperOperationTimeoutException
- [ZookeeperSessionException](class.zookeepersessionexception.md) -
Клас ZookeeperSessionException
