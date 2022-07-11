- [« GearmanClient::returnCode](gearmanclient.returncode.md)
- [GearmanClient::setClientCallback
»](gearmanclient.setclientcallback.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Запустити список завдань у паралельному режимі

# GearmanClient::runTasks

(PECL gearman u003d 0.5.0)

GearmanClient::runTasks — Запустити список завдань у паралельному режимі

### Опис

public **GearmanClient::runTasks**(): bool

Для набору завдань, раніше доданих за допомогою
[GearmanClient::addTask()](gearmanclient.addtask.md),
[GearmanClient::addTaskHigh()](gearmanclient.addtaskhigh.md),
[GearmanClient::addTaskLow()](gearmanclient.addtasklow.md),
[GearmanClient::addTaskBackground()](gearmanclient.addtaskbackground.md),
[GearmanClient::addTaskHighBackground()](gearmanclient.addtaskhighbackground.md)
або
[GearmanClient::addTaskLowBackground()](gearmanclient.addtasklowbackground.md),
цей дзвінок починає виконання в паралельному режимі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
