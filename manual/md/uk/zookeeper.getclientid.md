- [« Zookeeper::getChildren](zookeeper.getchildren.md)
- [Zookeeper::getConfig »](zookeeper.getconfig.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Повертає ідентифікатор сесії клієнта, дійсний лише у тому
у випадку, якщо підключення в даний час підключено (тобто останнє
стан спостерігача - ZOO_CONNECTED_STATE)

# Zookeeper::getClientId

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::getClientId — Повертає ідентифікатор сесії клієнта,
дійсний тільки в тому випадку, якщо з'єднання в даний час
підключені (тобто останній стан спостерігача - ZOO_CONNECTED_STATE)

### Опис

public **Zookeeper::getClientId**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор клієнтської сесії у разі успішного виконання
і false у разі виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP, коли не може отримати
ідентифікатор сеансу клієнта.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [Zookeeper::getState()](zookeeper.getstate.md) - Отримує
стан з'єднання zookeeper
- [Стани
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.states)
- [ZookeeperException](class.zookeeperexception.md)
