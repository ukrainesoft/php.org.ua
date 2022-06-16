- [« Zookeeper::connect](zookeeper.connect.md)
- [Zookeeper::create »](zookeeper.create.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Створює дескриптор для спілкування з zookeeper

# Zookeeper::\_\_construct

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::\_\_construct — Створює дескриптор для спілкування з zookeeper

### Опис

public **Zookeeper::\_\_construct**(string `$host` u003d '',
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**, int
`$recv_timeout` u003d 10000)

Метод створює новий дескриптор та сеанс zookeeper, який відповідає
цього дескриптора. Встановлення сеансу асинхронне, тому сеанс не
слід вважати встановленим доти, доки не буде отримано подію
стану ZOO_CONNECTED_STATE.

### Список параметрів

`host`
Розділені комами пари host:port, кожна з яких відповідає
zk-серверу. Наприклад, "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002"

`watcher_cb`
Callback є функцією глобального спостерігача. Коли ініціюються
Повідомлення, ця функція буде викликана.

`recv_timeout`
Час очікування для сеансу дійсний, лише якщо з'єднання в даний
момент підключені (тобто стан останнього спостерігача
ZOO_CONNECTED_STATE).

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли кількість
параметрів або їх типи неправильні або не вдалося ініціалізувати
екземпляр.

**Застереження**

Починаючи з версії 0.3.0 метод викидає виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [ZookeeperException](class.zookeeperexception.md)
