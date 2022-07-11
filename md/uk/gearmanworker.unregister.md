- [« GearmanWorker::timeout](gearmanworker.timeout.md)
- [GearmanWorker::unregisterAll »](gearmanworker.unregisterall.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Видалити реєстрацію імені функції на всіх серверах завдань

# GearmanWorker::unregister

(PECL gearman \>u003d 0.6.0)

GearmanWorker::unregister — Видалити реєстрацію імені функції на всіх
сервери завдань

### Опис

public **GearmanWorker::unregister**(string `$function_name`): bool

Знімає реєстрацію імені функції на всіх серверах завдань. Це означає,
що цьому обробнику (цієї функції) завдання посилатися не будуть.

### Список параметрів

`function_name`
Назва функції, реєстрацію якої потрібно зняти.

### Значення, що повертаються

Стандартне значення, що повертається Gearman.

### Дивіться також

- [GearmanWorker::register()](gearmanworker.register.md) -
Реєстрація функції на сервері завдань
- [GearmanWorker::unregisterAll()](gearmanworker.unregisterall.md) -
Видалення реєстрації всіх імен функцій на серверах завдань
