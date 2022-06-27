- [« GearmanJob::warning](gearmanjob.warning.md)
- [GearmanJob::workloadSize »](gearmanjob.workloadsize.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- отримання даних для обробки

# GearmanJob::workload

(PECL gearman u003d 0.5.0)

GearmanJob::workload — Отримання даних для обробки

### Опис

public **GearmanJob::workload**(): string

Повертає дані, передані для обробки. Це серіалізовані дані,
з якими працюватиме обробник.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Серіалізовані дані.

### Дивіться також

- [GearmanClient::do()](gearmanclient.do.md) - Виконує одне завдання
і повертає результат [Застарілий метод]
- [GearmanJob::workloadSize()](gearmanjob.workloadsize.md) -
Отримання розміру даних, що оброблюються
