- [« Zookeeper::create](zookeeper.create.md)
- [Zookeeper::exists »](zookeeper.exists.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Видаляє синхронно вузол у zookeeper

# Zookeeper::delete

(PECL zookeeper \>u003d 0.2.0)

Zookeeper::delete — Видаляє синхронно вузол у zookeeper

### Опис

public **Zookeeper::delete**(string `$path`, int `$version` u003d -1): bool

### Список параметрів

`path`
Назва вузла. Виражається як ім'я файлу з косою межею, що розділяє
предків вузла.

`version`
Очікувана версія вузла. Функція завершиться помилкою, якщо фактична
версія вузла відповідає очікуваної версії. Якщо використовується -1,
перевірка версії не виконуватиметься.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає PHP повідомлення про помилку/попередження, коли кількість
параметри або їх типи неправильні або не вдалося видалити вузол.

**Застереження**

Починаючи з версії 0.3.0 метод викидає виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::delete()****

Видалення існуючого вузла.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/path/to/node';$r u003d $zookeeper->delete($path);if ($r) echo ' виконання';else  echo 'Помилка';?> `

Результат виконання цього прикладу:

Успішне виконання

### Дивіться також

- [Zookeeper::create()](zookeeper.create.md) - Створює синхронно
вузол
- [Zookeeper::getChildren()](zookeeper.getchildren.md) - Виводить
список нащадків вузла синхронно
- [ZookeeperException](class.zookeeperexception.md)
