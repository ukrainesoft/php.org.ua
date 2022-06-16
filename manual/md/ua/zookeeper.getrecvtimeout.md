- [« Zookeeper::getConfig](zookeeper.getconfig.md)
- [Zookeeper::getState »](zookeeper.getstate.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Повертає час очікування для сесії, дійсний лише якщо
з'єднання в даний час підключені (тобто останній стан
спостерігача – ZOO_CONNECTED_STATE). Це значення може змінитися
після повторного підключення до сервера

# Zookeeper::getRecvTimeout

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::getRecvTimeout — Повертає час очікування для сесії,
дійсний тільки якщо підключення в даний час підключено
(тобто останній стан спостерігача - ZOO_CONNECTED_STATE). Це
значення може змінитися після повторного підключення до сервера

### Опис

public **Zookeeper::getRecvTimeout**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час очікування для сесії у разі успішного виконання та
false у разі виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP у разі збою операції.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [ZookeeperException](class.zookeeperexception.md)
