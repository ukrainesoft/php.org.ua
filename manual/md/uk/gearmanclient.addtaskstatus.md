- [«
GearmanClient::addTaskLowBackground](gearmanclient.addtasklowbackground.md)
- [GearmanClient::clearCallbacks »](gearmanclient.clearcallbacks.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Додати завдання для набуття статусу

# GearmanClient::addTaskStatus

(PECL gearman u003d 0.5.0)

GearmanClient::addTaskStatus — Додати завдання для отримання статусу

### Опис

public **GearmanClient::addTaskStatus**(string `$job_handle`, string
`&$context` u003d ?): [GearmanTask](class.gearmantask.md)

Використовується для запиту інформації про стан із сервера Gearman,
який буде викликати вказаний callback-функцію статусу (задану
через
[GearmanClient::setStatusCallback()](gearmanclient.setstatuscallback.md)).

### Список параметрів

`job_handle`
Дескриптор завдання для набуття статусу завдання

`context`
Дані, які будуть надіслані зворотному виклику. Зазвичай посилання на масив
або об'єкт

### Значення, що повертаються

Об'єкт [GearmanTask](class.gearmantask.md).

### Приклади

**Приклад #1 Моніторинг завершення кількох фонових задач**

У цьому прикладі представлена штучна затримка в обробнику, щоб
змоделювати тривалий робочий процес. Є лише один обробник,
запущений для цього прикладу.

`<?php/* створення клієнтського об'єкта */$gmclientu003d new GearmanClient();/* додавання сервера задач за замовчуванням */$gmclient->addServer();/* запуск не      array();$handles[0] u003d $gmclient->doBackground("reverse", "Hello World!");$handles[1] u003d $gmclient->doBackground("reverse", "!dlroW olleH"); $gmclient->setStatusCallback("reverse_status");/* Опитування сервера з метою визначення, коли завершаться фонові завдання; *//* кращим методом може бути установка callback-функцій на події */do{   /* використовуємо контекстні змінні для відстеження за те     $gmclient->addTaskStatus($handles[0], &$done); $gmclient->addTaskStatus($handles[1], &$done); $gmclient->runTasks(); echo "Виконано: $done
";   sleep(1);}while ($done !u003d 2);function reverse_status($task, $done){   if (!$task->isKnown())      $done++;}>

Результатом виконання цього прикладу буде щось подібне:

Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 0
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 1
Виконано: 2

### Дивіться також

- [GearmanClient::setStatusCallback()](gearmanclient.setstatuscallback.md) -
Завдання callback-функції, що збирає інформацію про стан
обробника завдань
