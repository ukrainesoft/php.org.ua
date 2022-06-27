- [«EvWatcher::invoke](evwatcher.invoke.md)
- [EvWatcher::setCallback »](evwatcher.setcallback.md)

- [PHP Manual](index.md)
- [EvWatcher](class.evwatcher.md)
- Налаштовує, чи повертатиметься цикл

# EvWatcher::keepalive

(PECL ev \>u003d 0.2.0)

EvWatcher::keepalive — Налаштовує, чи повертатиметься цикл

### Опис

public **EvWatcher::keepalive**( bool `$value` u003d ?): bool

Налаштовує, чи повертатиметься цикл. Якщо `value` підтримки
встановлено **`false`**, спостерігач не перешкоджатиме поверненню
[Ev::run()](ev.run.md) / [EvLoop::run()](evloop.run.md), навіть якщо
спостерігач активний.

Спостерігачі за замовчуванням мають `value` підтримки **`true`**.

Очищення статусу підтримки корисне при поверненні з
[Ev::run()](ev.run.md) / [EvLoop::run()](evloop.run.md) тільки
тому що спостерігач небажаний. Це може бути довго працюючий
спостерігач UDP-сокет або близько того.

### Список параметрів

`value`
Якщо `value` підтримки встановлено **`false`**, спостерігач не буде
перешкоджати поверненню [Ev::run()](ev.run.md) /
[EvLoop::run()](evloop.run.md), навіть якщо спостерігач активний.

### Значення, що повертаються

Повертає попередній стан.

### Приклади

**Приклад #1 Реєструємо спостерігач введення-виводу для будь-якого
UDP-сокету, але не перешкоджаємо запуску циклу подій лише через це
спостерігача.

` <?php$udp_socket u003d ...$udp_watcher u003d new EvIo($udp_socket, Ev::READ, function () { /* ... */ });$udp_watcher->keepalive(FAL
