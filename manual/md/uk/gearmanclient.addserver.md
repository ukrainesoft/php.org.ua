- [« GearmanClient::addOptions](gearmanclient.addoptions.md)
- [GearmanClient::addServers »](gearmanclient.addservers.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати сервер завдань для клієнта

# GearmanClient::addServer

(PECL gearman u003d 0.5.0)

GearmanClient::addServer — Додати сервер завдань для клієнта

### Опис

public **GearmanClient::addServer**(string `$host` u003d 127.0.0.1, int
`$port` u003d 4730): bool

Додає сервер завдань до списку серверів, які можна використовувати
для виконання завдання. Жодних операцій введення-виводу з сокетом тут не
відбувається. Сервер просто додається до списку.

### Список параметрів

`host`
Ім'я сервера хоста завдань.

`port`
Порт сервера завдань.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання двох серверів задач**

` <?php# Создаём клиентский объект$gmclientu003d new GearmanClient();# Добавляем два сервера задач, первый из них работает по умолчанию на порту 4730$gmclient->addServer("10.0.0.1");$gmclient->addServer( "10.0.0.2", 7003);?> `

### Дивіться також

- [GearmanClient::addServers()](gearmanclient.addservers.md) -
Додати список серверів завдань для клієнта
