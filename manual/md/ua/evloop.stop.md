- [«EvLoop::stat](evloop.stat.md)
- [EvLoop::suspend »](evloop.suspend.md)

- [PHP Manual](index.md)
- [EvLoop](class.evloop.md)
- зупиняє цикл подій

# EvLoop::stop

(PECL ev \>u003d 0.2.0)

EvLoop::stop — Зупиняє цикл подій

### Опис

public **EvLoop::stop**( int `$how` u003d ?): void

Зупиняє цикл подій

### Список параметрів

`how`
Одна з *Ev::BREAK\_\**
[констант](class.ev.md#ev.constants.break-flags) .

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EvLoop::run()](evloop.run.md) - Перевіряє події та викликає
callback-функції у циклі
- [Ev::stop()](ev.stop.md) - Зупинити цикл подій за замовчуванням
