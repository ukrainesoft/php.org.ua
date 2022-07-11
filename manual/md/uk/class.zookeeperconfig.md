- [« Zookeeper::setWatcher](zookeeper.setwatcher.md)
- [ZookeeperConfig::add »](zookeeperconfig.add.md)

- [PHP Manual](index.md)
- [ZooKeeper](book.zookeeper.md)
- Клас ZookeeperConfig

# Клас ZookeeperConfig

(PECL zookeeper \>u003d 0.6.0, ZooKeeper \>u003d 3.5.0)

## Вступ

Клас обробки ZooKeeper Config.

## Огляд класів

class **ZookeeperConfig** {

/\* Методи \*/

public [add](zookeeperconfig.add.md)(string `$members`, int `$version`
u003d -1, array `&$stat` u003d **`null`**): void

public
[get](zookeeperconfig.get.md)([callable](language.types.callable.md)
`$watcher_cb` u003d **`null`**, array `&$stat` u003d **`null`**): string

public [remove](zookeeperconfig.remove.md)(string `$id_list`, int
`$version` u003d -1, array `&$stat` u003d **`null`**): void

public [set](zookeeperconfig.set.md)(string `$members`, int `$version`
u003d -1, array `&$stat` u003d **`null`**): void

}

## Зміст

- [ZookeeperConfig::add](zookeeperconfig.add.md) — Додає сервери
в ансамбль
- [ZookeeperConfig::get](zookeeperconfig.get.md) — Синхронно
отримує останню підтверджену конфігурацію кластера ZooKeeper,
якій відомо серверу, до якого підключений клієнт
- [ZookeeperConfig::remove](zookeeperconfig.remove.md) — Видаляє
сервери з ансамблю
- [ZookeeperConfig::set](zookeeperconfig.set.md) — Змінює склад
ансамблю ZK та ролі його учасників
