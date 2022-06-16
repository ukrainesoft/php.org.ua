- [« GearmanJob::sendComplete](gearmanjob.sendcomplete.md)
- [GearmanJob::sendException »](gearmanjob.sendexception.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Відправлення даних завдання, що виконується

# GearmanJob::sendData

(PECL gearman \>u003d 0.6.0)

GearmanJob::sendData — Надсилання даних, що виконується.

### Опис

public **GearmanJob::sendData**(string `$data`): bool

Відправляє дані серверу завдань (і всім клієнтам, що слухають).

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
