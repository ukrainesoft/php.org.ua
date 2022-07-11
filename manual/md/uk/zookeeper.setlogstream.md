- [«
Zookeeper::setDeterministicConnOrder](zookeeper.setdeterministicconnorder.md)
- [Zookeeper::setWatcher »](zookeeper.setwatcher.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Встановлює потік, який використовуватиметься бібліотекою для
логування

# Zookeeper::setLogStream

(PECL zookeeper \>u003d 0.1.0)

Zookeeper::setLogStream - Встановлює потік, який буде
використовуватись бібліотекою для логування

### Опис

public **Zookeeper::setLogStream**(resource `$stream`): bool

Бібліотека zookeeper використовує stderr як поток логування по
замовчуванням. Програма повинна переконатися, що потік доступний для запису.
Передача в NULL скидає потік до значення за промовчанням (stderr).

### Список параметрів

`stream`
Потік, який використовуватиметься бібліотекою для логування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Метод видає PHP-повідомлення про помилку/попередження, коли кількість
параметри або типи неправильні або операція завершується невдало.

**Застереження**

Починаючи з версії 0.3.0, метод генерує виняток
[ZookeeperException](class.zookeeperexception.md) та його похідні.

### Дивіться також

- [Zookeeper::setDebugLevel()](zookeeper.setdebuglevel.md) -
Встановлює рівень логування для бібліотеки
- [ZookeeperException](class.zookeeperexception.md)
