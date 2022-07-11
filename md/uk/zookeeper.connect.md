- [« Zookeeper::close](zookeeper.close.md)
- [Zookeeper::\_\_construct »](zookeeper.construct.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Створює дескриптор для спілкування з zookeeper

# Zookeeper::connect

(PECL zookeeper \>u003d 0.2.0)

Zookeeper::connect — Створює дескриптор для спілкування з zookeeper

### Опис

public **Zookeeper::connect**(string `$host`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**, int
`$recv_timeout` u003d 10000): void

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

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли кількість
параметрів або їх типи неправильні або не вдалося ініціалізувати
екземпляр.

**Застереження**

Починаючи з версії 0.3.0 метод викидає виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [ZookeeperException](class.zookeeperexception.md)
