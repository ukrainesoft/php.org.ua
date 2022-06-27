- [« Zookeeper::\_\_construct](zookeeper.construct.md)
- [Zookeeper::delete »](zookeeper.delete.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Створює синхронно вузол

# Zookeeper::create

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::create — Створює синхронно вузол

### Опис

public **Zookeeper::create**(
string `$path`,
string `$value`,
array `$acls`,
int `$flags` u003d **`null`**
): string

Метод створить вузол у ZooKeeper. Вузол може бути створений тільки в тому
у випадку, якщо він ще не існує. Прапори створення впливають на створення
вузлів. Якщо встановлено прапорець ZOO_EPHEMERAL, вузол автоматично видаляється,
якщо сеанс клієнта завершується. Якщо встановлено прапорець ZOO_SEQUENCE, до
імені шляху додається унікальний монотонний порядковий
номер.

### Список параметрів

`path`
Назва вузла. Виражається як ім'я файлу з косою межею, що розділяє
предків вузла.

`value`
Дані для зберігання у вузлі.

`acls`
Початковий ACL вузла. ACL не може бути нульовим або порожнім.

`flags`
Може бути 0 для звичайного створення або із зазначенням прапорів створення.

### Значення, що повертаються

Повертає шлях нового вузла (він може відрізнятись від зазначеного шляху
через прапор ZOO_SEQUENCE) у разі успішного виконання та false у випадку
виникнення помилки.

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли кількість
параметри або їх типи неправильні або не вдалося створити вузол.

**Застереження**

Починаючи з версії 0.3.0 метод викидає виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::create()****

Створення нового сайту.

`<?php$zookeeper u003d new Zookeeper('locahost:2181');$aclArray u003d array(  array(   'perms'  u003d> Zookeeper::PERM_ALL, '  ',  ));$path u003d '/path/to/newnode';$realPath u003d $zookeeper->create($path, null, $aclArray);if ($realPath)  echo $realPath;else    ?> `

Результат виконання цього прикладу:

/path/to/newnode

### Дивіться також

- [Zookeeper::delete()](zookeeper.delete.md) - Видаляє синхронно
вузол у zookeeper
- [Zookeeper::getChildren()](zookeeper.getchildren.md) - Виводить
список нащадків вузла синхронно
- [Дозволи
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.perms)
- [ZookeeperException](class.zookeeperexception.md)
