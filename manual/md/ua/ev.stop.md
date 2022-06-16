- [«Ev::sleep](ev.sleep.md)
- [Ev::supportedBackends »](ev.supportedbackends.md)

- [PHP Manual](index.md)
- [Ev](class.ev.md)
- Зупинити цикл за замовчуванням

# Ev:: stop

(PECL ev \>u003d 0.2.0)

Ev::stop — Зупинити цикл подій за замовчуванням

### Опис

final public static **Ev::stop**( int `$how` u003d ?): void

Зупинити цикл за замовчуванням.

### Список параметрів

`how`
Одна з *Ev::BREAK\_\**
[констант](class.ev.md#ev.constants.break-flags) .

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [Ev::run()](ev.run.md) - Почати перевірку наявності подій та виклик
callback-функцій циклу за замовчуванням
