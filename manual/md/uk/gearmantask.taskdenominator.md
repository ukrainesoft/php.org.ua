- [« GearmanTask::sendWorkload](gearmantask.sendworkload.md)
- [GearmanTask::taskNumerator »](gearmantask.tasknumerator.md)

- [PHP Manual](index.md)
- [GearmanTask](class.gearmantask.md)
- отримати знаменник відсотка виконаної роботи

# GearmanTask::taskDenominator

(PECL gearman u003d 0.5.0)

GearmanTask::taskDenominator — Отримати знаменник відсотка виконаної
роботи

### Опис

public **GearmanTask::taskDenominator**(): int

Отримує знаменник дробу, який використовується для визначення
відсотка виконаної роботи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Число від 0 до 100 або **`false`**, якщо визначити значення не вдалося.

### Дивіться також

- [GearmanTask::taskNumerator()](gearmantask.tasknumerator.md) -
Отримання чисельника відсотка виконаної роботи
