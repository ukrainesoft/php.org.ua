- [« GearmanTask::taskNumerator](gearmantask.tasknumerator.md)
- [GearmanTask::uuid »](gearmantask.uuid.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- Отримання унікального ідентифікатора задачі

# GearmanTask::unique

(PECL gearman \>u003d 0.6.0)

GearmanTask::unique — Отримання унікального ідентифікатора задачі

### Опис

public **GearmanTask::unique**(): string

Повертає унікальний ідентифікатор цього завдання. Цей ідентифікатор
привласнює [GearmanClient](class.gearmanclient.md), на відміну від
дескриптора завдання, яке встановлює сервер завдань Gearman.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Унікальний ідентифікатор або **`false`**, якщо ідентифікатор не
привласнений.

### Дивіться також

- [GearmanClient::do()](gearmanclient.do.md) - Виконує одне завдання
і повертає результат [Застарілий метод]
- [GearmanClient::addTask()](gearmanclient.addtask.md) - Додати
завдання, яке буде виконано в паралельному режимі
