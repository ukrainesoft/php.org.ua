- [« GearmanTask::unique](gearmantask.unique.md)
- [GearmanWorker »](class.gearmanworker.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- отримання унікального ідентифікатора завдання (застарілий метод)

# GearmanTask::uuid

(PECL gearman \<u003d 0.5.0)

GearmanTask::uuid — Отримання унікального ідентифікатора задачі
(застарілий метод)

### Опис

public **GearmanTask::uuid**(): string

Повертає унікальний ідентифікатор цього завдання. Цей ідентифікатор
привласнює [GearmanClient](class.gearmanclient.md), на відміну від
ідентифікатор об'єкта завдання, який встановлює сервер завдань.

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanTask::unique()](gearmantask.unique.md) у версії 0.6.0 модуля
> Gearman.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Унікальний ідентифікатор або **`false`**, якщо ідентифікатор не
призначений.

### Дивіться також

- [GearmanClient::do()](gearmanclient.do.md) - Виконує одне завдання
і повертає результат [Застарілий метод]
- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
