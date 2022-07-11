- [« Zookeeper::getState](zookeeper.getstate.md)
- [Zookeeper::set »](zookeeper.set.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Перевіряє, чи можна відновити поточний стан підключення
ZooKeeper

# Zookeeper::isRecoverable

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::isRecoverable — Перевіряє, чи можна відновити поточне
стан підключення ZooKeeper

### Опис

public **Zookeeper::isRecoverable**(): bool

Програма повинна закрити дескриптор та спробувати перепідключитись.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає true/false у разі успішного виконання та false у разі
виникнення помилки.

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
- [Zookeeper::getClientId()](zookeeper.getclientid.md) - Повертає
ідентифікатор сесії клієнта дійсний лише в тому випадку, якщо
з'єднання в даний час підключені (тобто останній стан
спостерігача - ZOO_CONNECTED_STATE)
- [Стани
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.states)
- [ZookeeperException](class.zookeeperexception.md)
