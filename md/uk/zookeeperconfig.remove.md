- [« ZookeeperConfig::get](zookeeperconfig.get.md)
- [ZookeeperConfig::set »](zookeeperconfig.set.md)

- [PHP Manual](index.md)
- [ZookeeperConfig](class.zookeeperconfig.md)
- Видаляє сервери з ансамблю

# ZookeeperConfig::remove

(PECL zookeeper \>u003d 0.6.0, ZooKeeper \>u003d 3.5.0)

ZookeeperConfig::remove — Видаляє сервери з ансамблю

### Опис

public **ZookeeperConfig::remove**(string `$id_list`, int `$version` u003d
-1, array `&$stat` u003d **`null`**): void

### Список параметрів

`id_list`
Розділений комами список ідентифікаторів серверів, які необхідно
видалити із ансамблю. У кожного є ідентифікатор сервера, що видаляється,
лише для основних кворумів.

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

**Приклад #1 Приклад використання **ZookeeperConfig::remove()****

Видалення серверів.

` <?php$client u003d new Zookeeper();$client->connect('localhost:2181');$client->addAuth('digest', 'timandes:timandes');$zkConfig u003d $client->getConfig ();$zkConfig->set("server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181,server.2u003dlocalhost:2889:3889:participant;0.0.0.0:2182");$zkConfig ->remove("2");echo$zkConfig->get();if($r) echo $r;else echo 'Помилка';?> `

Результат виконання цього прикладу:

server.1u003dlocalhost:2888:3888:participant;0.0.0.0:2181
versionu003d0xca01e881a2

### Дивіться також

- [ZookeeperConfig::get()](zookeeperconfig.get.md) - Синхронно
отримує останню підтверджену конфігурацію кластера ZooKeeper,
якій відомо серверу, до якого підключений клієнт
- [ZookeeperConfig::add()](zookeeperconfig.add.md) - Додає
сервери в ансамбль
- [ZookeeperConfig::set()](zookeeperconfig.set.md) - Змінює склад
ансамблю ZK та ролі його учасників
- [ZookeeperException](class.zookeeperexception.md)
