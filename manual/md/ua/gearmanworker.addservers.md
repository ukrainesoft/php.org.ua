- [« GearmanWorker::addServer](gearmanworker.addserver.md)
- [GearmanWorker::clone »](gearmanworker.clone.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Додавання серверів завдань

# GearmanWorker::addServers

(PECL gearman u003d 0.5.0)

GearmanWorker::addServers — Додавання серверів завдань

### Опис

public **GearmanWorker::addServers**(string `$servers` u003d
127.0.0.1:4730): bool

Додає один або кілька серверів завдань у цей обробник.
Обробник зберігає список серверів, від яких може отримувати завдання
на обробку. Метод просто додає інформацію про сервери в цей
список, ніякого обміну даними між сервером та обробником у цей
моменту не відбувається.

### Список параметрів

`servers`
Список розділених комів серверів у форматі хост:порт. Якщо порт не
вказано, за замовчуванням приймається номер 4730.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання двох серверів завдань**

` <?php$workeru003d new GearmanWorker();$worker->addServers("10.0.0.1,10.0.0.2:7003");?> `

### Дивіться також

- [GearmanWorker::addServer()](gearmanworker.addserver.md) -
Додавання сервера завдань
