- [« GearmanWorker::unregister](gearmanworker.unregister.md)
- [GearmanWorker::wait »](gearmanworker.wait.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Видалення реєстрації всіх імен функцій на серверах завдань

# GearmanWorker::unregisterAll

(PECL gearman \>u003d 0.6.0)

GearmanWorker::unregisterAll — Видалення реєстрації всіх імен функцій на
сервери завдань

### Опис

public **GearmanWorker::unregisterAll**(): bool

Знімає реєстрацію всіх раніше зареєстрованих функцій на всіх
сервери завдань. Це означає, що цього оброблювача більше не будуть
надходити жодні завдання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Стандартне значення, що повертається Gearman.

### Дивіться також

- [GearmanWorker::register()](gearmanworker.register.md) -
Реєстрація функції на сервері завдань
- [GearmanWorker::unregister()](gearmanworker.unregister.md) -
Видалити реєстрацію імені функції на всіх серверах завдань
