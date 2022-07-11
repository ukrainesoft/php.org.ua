- [« Zookeeper::setAcl](zookeeper.setacl.md)
- [Zookeeper::setDeterministicConnOrder
»](zookeeper.setdeterministicconnorder.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Встановлює рівень логування для бібліотеки

# Zookeeper::setDebugLevel

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::setDebugLevel — Встановлює рівень логування для
бібліотеки

### Опис

public static **Zookeeper::setDebugLevel**(int `$logLevel`): bool

### Список параметрів

`logLevel`
Константи рівня логування ZooKeeper.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає PHP-повідомлення про помилку/попередження, коли число
параметри або типи неправильні або не вдається встановити рівень
логування.

**Застереження**

Починаючи з версії 0.3.0 цей метод генерує виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::setDebugLevel()****

Установка рівня логування

` <?php$r u003d Zookeeper::setDebugLevel(Zookeeper::LOG_LEVEL_WARN);if ($r) echo 'Успішно';else echo 'Помилка';?>?>`

Результат виконання цього прикладу:

SUCCESS

### Дивіться також

- [Рівень логування
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.log-levels)
- [ZookeeperException](class.zookeeperexception.md)
