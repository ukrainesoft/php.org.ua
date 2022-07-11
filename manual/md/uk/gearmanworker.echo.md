- [« GearmanWorker::\_\_construct](gearmanworker.construct.md)
- [GearmanWorker::error »](gearmanworker.error.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Перевірка відгуку серверів завдань

# GearmanWorker::echo

(PECL gearman \>u003d 0.6.0)

GearmanWorker::echo — Перевірка відгуку серверів завдань

### Опис

public **GearmanWorker::echo**(string `$workload`): bool

Надсилає дані всім серверам завдань, щоб перевірити, які сервери
дадуть відповідь. Це налагоджувальна функція для перевірки відгуку серверів.

### Список параметрів

`workload`
Довільні серіалізовані дані

### Значення, що повертаються

Стандартне для Gearman значення, що повертається.

### Дивіться також

- [GearmanClient::echo()](gearmanclient.echo.md) - Надсилає дані
всім серверам завдань, щоб перевірити відгук \[Застарілий метод\]
