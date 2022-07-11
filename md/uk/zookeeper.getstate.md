- [« Zookeeper::getRecvTimeout](zookeeper.getrecvtimeout.md)
- [Zookeeper::isRecoverable »](zookeeper.isrecoverable.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Отримує стан з'єднання zookeeper

# Zookeeper::getState

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::getState — Отримує стан з'єднання zookeeper

### Опис

public **Zookeeper::getState**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає стан з'єднання zookeeper у разі успішного виконання
і false у разі виникнення помилки.

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли йому не
вдається отримати стан з'єднання zookeeper.

**Застереження**

Починаючи з версії 0.3.0 цей метод генерує виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [Zookeeper::getClientId()](zookeeper.getclientid.md) - Повертає
ідентифікатор сесії клієнта дійсний лише в тому випадку, якщо
з'єднання в даний час підключені (тобто останній стан
спостерігача - ZOO_CONNECTED_STATE)
- [Стани
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.states)
- [ZookeeperException](class.zookeeperexception.md)
