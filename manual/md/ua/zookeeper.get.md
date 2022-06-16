- [« Zookeeper::exists](zookeeper.exists.md)
- [Zookeeper::getAcl »](zookeeper.getacl.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Синхронно отримує дані, пов'язані з вузлом

# Zookeeper::get

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::get — Синхронно отримує дані, пов'язані з вузлом

### Опис

public **Zookeeper::get**(
string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d
**`null`**,
array `&$stat` u003d **`null`**,
int `$max_size` u003d 0
): string

### Список параметрів

`path`
Ім'я вузла. Виражається як ім'я файлу з косою межею, що розділяє предків
вузла.

`watcher_cb`
Якщо ненульове значення, на сервері буде встановлено спостереження, щоб
повідомити клієнта про зміну вузла.

`stat`
Якщо не NULL, при поверненні буде збережено значення stat для шляху.

`max_size`
Максимальний обсяг даних. Якщо використовується 0, метод поверне все
дані.

### Значення, що повертаються

Повертає дані у разі успішного виконання та false у разі
виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP, коли кількість параметрів або
типи неправильні або не вдається отримати значення від вузла.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::get()****

Набуття значення від вузла.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/path/to/node';$value u003d 'nodevalue';$zookeeper->set($path, $value);$ r u003d $zookeeper->get($path);if ($r) echo $r;else echo 'Помилка';?> `

Результат виконання цього прикладу:

nodevalue

**Приклад #2 Приклад використання stat **Zookeeper::get()****

Отримання інформації про статистику сайту.

` <?php$zookeeper u003d new Zookeeper('localhost:2181');$path u003d '/path/to/node';$stat u003d [];$zookeeper->get($path, null, $stat); var_dump($stat);?> `

Результат виконання цього прикладу:

array(11) {
["czxid"]u003d>
float(0)
["mzxid"]u003d>
float(0)
["ctime"]u003d>
float(0)
["mtime"]u003d>
float(0)
["version"]u003d>
int(0)
["cversion"]u003d>
int(-2)
["aversion"]u003d>
int(0)
["ephemeralOwner"]u003d>
float(0)
["dataLength"]u003d>
int(0)
["numChildren"]u003d>
int(2)
["pzxid"]u003d>
float(0)
}

### Дивіться також

- [Zookeeper::set()](zookeeper.set.md) - Встановлює дані,
пов'язані з вузлом
- [ZookeeperException](class.zookeeperexception.md)
