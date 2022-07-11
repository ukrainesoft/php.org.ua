- [« ZookeeperConfig::add](zookeeperconfig.add.md)
- [ZookeeperConfig::remove »](zookeeperconfig.remove.md)

- [PHP Manual](index.md)
- [ZookeeperConfig](class.zookeeperconfig.md)
- Синхронно отримує останню підтверджену конфігурацію кластера
ZooKeeper, про яку відомо серверу, до якого підключений клієнт

# ZookeeperConfig::get

(PECL zookeeper \>u003d 0.6.0, ZooKeeper \>u003d 3.5.0)

ZookeeperConfig::get — Синхронно отримує останню підтверджену
конфігурацію кластера ZooKeeper, про яку відомо серверу, до якого
підключений клієнт

### Опис

public **ZookeeperConfig::get**([callable](language.types.callable.md)
`$watcher_cb` u003d **`null`**, array `&$stat` u003d **`null`**): string

### Список параметрів

`watcher_cb`
Якщо не нуль, на сервері буде встановлено спостерігач, щоб повідомляти
клієнта, коли вузол змінюється.

`stat`
Якщо не NULL, буде містити значення stat для шляху повернення.

### Значення, що повертаються

Повертає рядок конфігурації у разі успішного виконання та false в
у разі виникнення помилки.

### Помилки

Метод генерує [ZookeeperException](class.zookeeperexception.md) та
його похідні, коли кількість параметрів чи типи невірні чи не
вдається отримати конфігурацію.

### Приклади

**Приклад #1 Приклад використання **ZookeeperConfig::get()****

Отримання конфігурації.

` <?php$zk u003d new Zookeeper();$zk->connect('localhost:2181');$zk->addAuth('digest', 'timandes:timandes');$zkConfig u003d$zk->getConfig ();$r u003d $zkConfig->get();if ($r) echo $r;else  echo 'Помилка';?> `

Результат виконання цього прикладу:

server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181
versionu003d0xca01e881a2

### Дивіться також

- [ZookeeperConfig::set()](zookeeperconfig.set.md) - Змінює склад
ансамблю ZK та ролі його учасників
- [ZookeeperConfig::add()](zookeeperconfig.add.md) - Додає
сервери в ансамбль
- [ZookeeperConfig::remove()](zookeeperconfig.remove.md) - Видаляє
сервери з ансамблю
- [ZookeeperException](class.zookeeperexception.md)
