- [« Zookeeper::set](zookeeper.set.md)
- [Zookeeper::setDebugLevel »](zookeeper.setdebuglevel.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Встановлює ACL, пов'язаний із вузлом синхронно

# Zookeeper::setAcl

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::setAcl — Встановлює ACL, пов'язаний із вузлом синхронно

### Опис

public **Zookeeper::setAcl**(string `$path`, int `$version`, array
`$acl`): bool

### Список параметрів

`path`
Ім'я вузла. Виражається як ім'я файлу з косою межею, що розділяє предків
вузла.

`version`
Очікувана версія шляху.

`acl`
ACL, який потрібно встановити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP, коли кількість параметрів або
типи неправильні або не вдається встановити ACL для вузла.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::setAcl()****

Встановіть ACL для вузла.

`u003d?                                       ',  ));$path u003d '/path/to/newnode';$zookeeper->setAcl($path, $aclArray);$r u003d $zookeeper->getAcl($path);if ($r) var_dump $r);else  echo 'Помилка';?> `

Результат виконання цього прикладу:

array(1) {
[0]u003d>
array(3) {
["perms"]u003d>
int(31)
["scheme"]u003d>
string(5) "world"
["id"]u003d>
string(6) "anyone"
}
}

### Дивіться також

- [Zookeeper::create()](zookeeper.create.md) - Створює синхронно
вузол
- [Zookeeper::getAcl()](zookeeper.getacl.md) - Синхронно отримує
ACL, пов'язаний із вузлом
- [Дозволи
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.perms)
- [ZookeeperException](class.zookeeperexception.md)
