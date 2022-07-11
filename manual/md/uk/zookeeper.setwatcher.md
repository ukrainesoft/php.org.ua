- [« Zookeeper::setLogStream](zookeeper.setlogstream.md)
- [ZookeeperConfig »](class.zookeeperconfig.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Встановлює функцію спостерігача

# Zookeeper::setWatcher

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::setWatcher — Встановлює функцію спостерігача

### Опис

public
**Zookeeper::setWatcher**([callable](language.types.callable.md)
`$watcher_cb`): bool

### Список параметрів

`watcher_cb`
На сервері буде встановлено спостерігач для повідомлення клієнта у випадку
зміни вузла.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає PHP-повідомлення про помилку/попередження, коли число
параметрів або їх типи неправильні або неможливо встановити спостерігача.

**Застереження**

Починаючи з версії 0.3.0, метод генерує виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::exists()](zookeeper.exists.md) - Синхронно перевіряє
наявність вузла в zookeeper
- [Zookeeper::get()](zookeeper.get.md) - Синхронно отримує дані,
пов'язані з вузлом
- [ZookeeperException](class.zookeeperexception.md)
