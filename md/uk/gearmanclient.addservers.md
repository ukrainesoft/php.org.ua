- [« GearmanClient::addServer](gearmanclient.addserver.md)
- [GearmanClient::addTask »](gearmanclient.addtask.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати список серверів завдань для клієнта

# GearmanClient::addServers

(PECL gearman u003d 0.5.0)

GearmanClient::addServers — Додати список серверів завдань для клієнта

### Опис

public **GearmanClient::addServers**(string `$servers` u003d
127.0.0.1:4730): bool

Додає список серверів завдань, які можуть бути використані для
виконання завдання. Жодних операцій введення-виводу з сокетом тут не
відбувається. Сервери просто додаються до повного списку серверів.

### Список параметрів

`servers`
Список серверів, розділених комами. Кожен сервер вказано у форматі
''host:port''.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання двох серверів задач**

`<?php# Створюємо наш клієнтський об'єкт$gmclientu003d new GearmanClient();# Добавляємо кілька серверів задач, перший з них працює за умовчанням 0:00:00:0. ;?> `

### Дивіться також

- [GearmanClient::addServer()](gearmanclient.addserver.md) -
Додати сервер завдань для клієнта
