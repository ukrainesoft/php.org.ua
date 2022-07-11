- [« Zookeeper::getAcl](zookeeper.getacl.md)
- [Zookeeper::getClientId »](zookeeper.getclientid.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Виводить список нащадків вузла синхронно

# Zookeeper::getChildren

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::getChildren - Виводить список нащадків вузла синхронно

### Опис

public **Zookeeper::getChildren**(string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**):
array

### Список параметрів

`path`
Ім'я вузла. Виражається як ім'я файлу з косою межею, що розділяє предків
вузла.

`watcher_cb`
Якщо ненульове значення, на сервері буде встановлено спостереження, щоб
повідомити клієнта про зміну вузла.

### Значення, що повертаються

Повертає масив з дочірніми шляхами у разі успішного виконання та
false у разі виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP, коли кількість параметрів або
типи неправильні чи не вдається перерахувати дочірні елементи вузла.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::getChildren()****

Перелічує дочірні елементи вузла.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/zookeeper';$r u003d $zookeeper->getchildren($path);if ($r) var_dump($r echo 'Помилка';?> `

Результат виконання цього прикладу:

array(1) {
[0]u003d>
string(6) "config"
}

### Дивіться також

- [Zookeeper::create()](zookeeper.create.md) - Створює синхронно
вузол
- [Zookeeper::delete()](zookeeper.delete.md) - Видаляє синхронно
вузол у zookeeper
- [ZookeeperException](class.zookeeperexception.md)
