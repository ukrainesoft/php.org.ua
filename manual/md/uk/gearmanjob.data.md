- [« GearmanJob::\_\_construct](gearmanjob.construct.md)
- [GearmanJob::exception »](gearmanjob.exception.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання даних (застарілий метод)

# GearmanJob::data

(PECL gearman \<u003d 0.5.0)

GearmanJob::data — Надсилання даних (застарілий метод)

### Опис

public **GearmanJob::data**(string `$data`): bool

Відправляє дані серверу завдань (і всім клієнтам, що слухають).

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendData()](gearmanjob.senddata.md) у випуску 0.6.0
> Gearman модуля.

### Список параметрів

`data`
Серіалізовані дані.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::workload()](gearmanjob.workload.md) - Отримання
даних для обробки
- [GearmanTask::data()](gearmantask.data.md) - Отримати дані,
повернені для завдання
