- [«Zookeeper](class.zookeeper.md)
- [Zookeeper::close »](zookeeper.close.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Вказує облікові дані програми

# Zookeeper::addAuth

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::addAuth — Вказує облікові дані програми

### Опис

public **Zookeeper::addAuth**(string `$scheme`, string `$cert`,
[callable](language.types.callable.md) `$completion_cb` u003d **`null`**):
bool

Додаток викликає цю функцію, щоб вказати свої облікові дані для
цілей аутентифікації. Сервер буде використовувати провайдера безпеки,
вказаного в параметрі схеми для аутентифікації клієнтського з'єднання.
Якщо запит на аутентифікацію не вдався: - з'єднання з сервером буде
розірвано. - спостерігач викликається зі значенням ZOO_AUTH_FAILED_STATE
як параметр стану.

### Список параметрів

`scheme`
Ідентифікатор схеми автентифікації Вбудована підтримка: "digest"
аутентифікації на основі пароля

`cert`
Облікові дані програми. Фактичне значення залежить від схеми.

`completion_cb`
Підпрограма, щоб викликати, коли запит завершується. Один із наступних
Коди результату можуть бути передані в callback-функцію завершення: -
Операцію ZOK успішно завершено - ZAUTHFAILED автентифікація не вдалася

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає PHP-повідомлення про помилку/попередження, коли кількість
параметри або типи неправильні або операція завершується невдало.

**Застереження**

Починаючи з версії 0.3.0, метод генерує виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Приклади

**Приклад #1 Приклад використання **Zookeeper::addAuth()****

Додавання аутентифікації перед запитом на значення вузла.

` <?php$zookeeper u003d new Zookeeper('locahost:2181');$path u003d '/path/to/node';$value u003d 'nodevalue';$zookeeper->set($path, $value);$ zookeeper->addAuth('digest', 'user0:passwd0');$r u003d $zookeeper->get($path);if ($r) echo $r;else  echo 'Помилка';?> `

Результат виконання цього прикладу:

nodevalue

### Дивіться також

- [Zookeeper::create()](zookeeper.create.md) - Створює синхронно
вузол
- [Zookeeper::setAcl()](zookeeper.setacl.md) - Встановлює ACL,
пов'язаний з вузлом синхронно
- [Zookeeper::getAcl()](zookeeper.getacl.md) - Синхронно отримує
ACL, пов'язаний із вузлом
- [Стани
ZooKeeper](class.zookeeper.md#zookeeper.class.constants.states)
- [ZookeeperException](class.zookeeperexception.md)
