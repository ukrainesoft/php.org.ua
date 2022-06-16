- [« ZookeeperConfig](class.zookeeperconfig.md)
- [ZookeeperConfig::get »](zookeeperconfig.get.md)

- [PHP Manual](index.md)
- [ZookeeperConfig](class.zookeeperconfig.md)
- Додає сервери до ансамблю

# ZookeeperConfig::add

(PECL zookeeper \>u003d 0.6.0, ZooKeeper \>u003d 3.5.0)

ZookeeperConfig::add — Додає сервери до ансамблю

### Опис

public **ZookeeperConfig::add**(string `$members`, int `$version` u003d -1,
array `&$stat` u003d **`null`**): void

### Список параметрів

`members`
Розділений комами список серверів для додавання до ансамблю. Кожен
з них має рядок конфігурації для сервера, що додається (як показано
у файлі конфігурації), лише для основних кворумів.

`version`
Очікувана версія вузла. Функція завершиться з помилкою, якщо фактична
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

**Приклад #1 Приклад використання **ZookeeperConfig::add()****

Додавання серверів.

` <?php$client u003d new Zookeeper();$client->connect('localhost:2181');$client->addAuth('digest', 'timandes:timandes');$zkConfig u003d $client->getConfig ();$zkConfig->set("server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181");$zkConfig->add("server.2u003dlocalhost:2889:3889:participant;0.0 .0.0:2182");$r u003d $zkConfig->get();if ($r)  echo $r;else  echo 'Помилка';?> `

Результат виконання цього прикладу:

server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181
server.2u003dlocalhost:2889:3889:participant;0.0.0.0:2182
versionu003d0xca01e881a2

### Дивіться також

- [ZookeeperConfig::get()](zookeeperconfig.get.md) - Синхронно
отримує останню підтверджену конфігурацію кластера ZooKeeper,
якій відомо серверу, до якого підключений клієнт
- [ZookeeperConfig::set()](zookeeperconfig.set.md) - Змінює склад
ансамблю ZK та ролі його учасників
- [ZookeeperConfig::remove()](zookeeperconfig.remove.md) - Видаляє
сервери з ансамблю
- [ZookeeperException](class.zookeeperexception.md)
