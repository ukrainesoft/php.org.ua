- [« GearmanWorker::options](gearmanworker.options.md)
- [GearmanWorker::removeOptions »](gearmanworker.removeoptions.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Реєстрація функції на сервері завдань

# GearmanWorker::register

(PECL gearman \>u003d 0.6.0)

GearmanWorker::register — Реєстрація функції на сервері завдань

### Опис

public **GearmanWorker::register**(string `$function_name`, int
`$timeout` u003d ?): bool

Реєструє ім'я функції на сервері завдань та додатково задає час
очікування. Час очікування визначає, скільки секунд сервер чекатиме,
після чого оголосить завдання проваленим. Нульове значення часу
очікування означає відсутність обмеження.

### Список параметрів

`function_name`
Ім'я функції, яке потрібно зареєструвати на сервері.

`timeout`
Часовий інтервал за секунди.

### Значення, що повертаються

Стандартне значення, що повертається Gearman.

### Дивіться також

- [GearmanWorker::unregister()](gearmanworker.unregister.md) -
Видалити реєстрацію імені функції на всіх серверах завдань
- [GearmanWorker::unregisterAll()](gearmanworker.unregisterall.md) -
Видалення реєстрації всіх імен функцій на серверах завдань
