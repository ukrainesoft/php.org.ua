- [« GearmanTask::create](gearmantask.create.md)
- [GearmanTask::dataSize »](gearmantask.datasize.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- Отримати дані, повернені для завдання

# GearmanTask::data

(PECL gearman u003d 0.5.0)

GearmanTask::data — Отримати дані, повернені для завдання

### Опис

public **GearmanTask::data**(): string

Отримує дані, що повертаються обробником після завершення роботи завдання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Серіалізовані дані або **`false`**, якщо обробник не надав
даних.

### Дивіться також

- [GearmanTask::dataSize()](gearmantask.datasize.md) - Отримати
розмір даних, що повертаються
