- [« GearmanWorker::addOptions](gearmanworker.addoptions.md)
- [GearmanWorker::addServers »](gearmanworker.addservers.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Додавання сервера завдань

# GearmanWorker::addServer

(PECL gearman u003d 0.5.0)

GearmanWorker::addServer — Додавання сервера завдань

### Опис

public **GearmanWorker::addServer**(string `$host` u003d 127.0.0.1, int
`$port` u003d 4730): bool

Додає сервер завдань до обробника. Обробник зберігає список
серверів, від яких може отримувати завдання на обробку. Метод
просто додає інформацію про сервер у цей список, жодного обміну
даними між сервером та обробником у цей момент не відбувається.

### Список параметрів

`host`
Ім'я сервера хоста завдань.

`port`
Порт сервера завдань.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання альтернативних Gearman серверів**

` <?php$workeru003d new GearmanWorker();$worker->addServer("10.0.0.1");$worker->addServer("10.0.0.2", 7003);?> `

### Дивіться також

- [GearmanWorker::addServers()](gearmanworker.addservers.md) -
Додавання серверів завдань
