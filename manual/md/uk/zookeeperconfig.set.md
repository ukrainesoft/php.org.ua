- [« ZookeeperConfig::remove](zookeeperconfig.remove.md)
- [ZookeeperException »](class.zookeeperexception.md)

- [PHP Manual](index.md)
- [ZookeeperConfig](class.zookeeperconfig.md)
- Змінює склад ансамблю ZK та ролі його учасників

# ZookeeperConfig::set

(PECL zookeeper \>u003d 0.6.0, ZooKeeper \>u003d 3.5.0)

ZookeeperConfig::set — Змінює склад ансамблю ZK та ролі його учасників

### Опис

public **ZookeeperConfig::set**(string `$members`, int `$version` u003d -1,
array `&$stat` u003d **`null`**): void

### Список параметрів

`members`
Розділений комами список нових членів ансамблю (наприклад, вміст
файлу конфігурації) - для використання тільки з неінкрементною
реконфігурацією.

`version`
Очікувана версія вузла. Функція завершиться помилкою, якщо фактична
версія вузла відповідає очікуваної версії. Якщо використовується -1,
перевірка версії не виконуватиметься.

`stat`
Якщо не NULL, буде містити значення stat для шляху повернення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Метод генерує [ZookeeperException](class.zookeeperexception.md) та
його похідні, коли число параметрів або типи неправильні або не вдається
зберегти значення у вузлі.

### Приклади

**Приклад #1 Приклад використання **ZookeeperConfig::set()****

Реконфігурація.

` <?php$client u003d new Zookeeper();$client->connect('localhost:2181');$client->addAuth('digest', 'timandes:timandes');$zkConfig u003d $client->getConfig ();$zkConfig->set("server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181");?> `

### Дивіться також

- [ZookeeperConfig::get()](zookeeperconfig.get.md) - Синхронно
отримує останню підтверджену конфігурацію кластера ZooKeeper,
якій відомо серверу, до якого підключений клієнт
- [ZookeeperConfig::add()](zookeeperconfig.add.md) - Додає
сервери в ансамбль
- [ZookeeperConfig::remove()](zookeeperconfig.remove.md) - Видаляє
сервери з ансамблю
- [ZookeeperException](class.zookeeperexception.md)
