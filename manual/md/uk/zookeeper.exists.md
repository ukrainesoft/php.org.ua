- [« Zookeeper::delete](zookeeper.delete.md)
- [Zookeeper::get »](zookeeper.get.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Синхронно перевіряє наявність вузла в zookeeper

# Zookeeper::exists

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::exists — Синхронно перевіряє наявність вузла в zookeeper

### Опис

public **Zookeeper::exists**(string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**):
array

### Список параметрів

`path`
Назва вузла. Виражається як ім'я файлу з косою межею, що розділяє
предків вузла.

`watcher_cb`
Якщо не нуль, на сервері буде встановлено спостереження, щоб повідомити
клієнта, якщо вузол змінюється. Спостереження буде встановлено, навіть якщо
вузол немає.

### Значення, що повертаються

Повертає значення stat для шляху, якщо даний вузол існує,
в іншому випадку повертає false.

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли кількість
параметри або їх типи неправильні або не вдалося перевірити наявність вузла.

**Застереження**

Починаючи з версії 0.3.0 метод викидає виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::exists()****

Перевірити наявність вузла.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/path/to/node';$r u003d $zookeeper->exists($path);if ($r) echo '' ';else  echo 'Не визначено або помилка';?> `

Результат виконання цього прикладу:

Існує

### Дивіться також

- [Zookeeper::get()](zookeeper.get.md) - Синхронно отримує дані,
пов'язані з вузлом
- [ZookeeperException](class.zookeeperexception.md)
