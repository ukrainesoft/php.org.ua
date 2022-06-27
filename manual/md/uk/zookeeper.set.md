- [« Zookeeper::isRecoverable](zookeeper.isrecoverable.md)
- [Zookeeper::setAcl »](zookeeper.setacl.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Встановлює дані, пов'язані з вузлом

# Zookeeper::set

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::set — Встановлює дані, пов'язані з вузлом

### Опис

public **Zookeeper::set**(
string `$path`,
string `$value`,
int `$version` u003d -1,
array `&$stat` u003d **`null`**
): bool

### Список параметрів

`path`
Ім'я вузла. Виражається як ім'я файлу з косою межею, що розділяє предків
вузла.

`value`
Дані, які зберігатимуться у вузлі.

`version`
Очікувана версія вузла. Функція завершиться помилкою, якщо фактична
версія вузла відповідає очікуваної. Якщо використовується -1, перевірка
версії не виконуватиметься.

`stat`
Якщо не NULL, при поверненні буде збережено значення stat для шляху.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає помилку/попередження PHP, коли кількість параметрів або
типи неправильні або не вдається зберегти значення у вузлі.

**Застереження**

Починаючи з версії 0.3.0 метод викидає
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::set()****

Збереження значення у вузол.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/path/to/node';$value u003d 'nodevalue';$r u003d $zookeeper->set($path, $ );if ($r)  echo 'Значення збережено';else  echo 'Помилка';?> `

Результат виконання цього прикладу:

SUCCESS

### Дивіться також

- [Zookeeper::create()](zookeeper.create.md) - Створює синхронно
вузол
- [Zookeeper::get()](zookeeper.get.md) - Синхронно отримує дані,
пов'язані з вузлом
- [ZookeeperException](class.zookeeperexception.md)
