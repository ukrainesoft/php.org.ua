- [« Swoole\Channel::pop](swoole-channel.pop.md)
- [Swoole\Channel::stats »](swoole-channel.stats.md)

- [PHP Manual](index.md)
- [Swoole\Channel](class.swoole-channel.md)
- Записує та передає дані в канал Swoole

# Swoole\Channel::push

(PECL swoole \>u003d 1.9.0)

Swoole\Channel::push — Записує та передає дані у канал Swoole

### Опис

public **Swoole\Channel::push**(string `$data`): bool

Дані можуть бути будь-якою непустою змінною PHP, змінна буде
серіалізована, якщо вона є рядковим типом.

Якщо розмір даних перевищує 8 КБ, канал Swoole використовуватиме
тимчасові сховища файлів.

Функція поверне true, якщо операцію запису виконано успішно або false,
якщо недостатньо місця.

### Список параметрів

`data`
Дані для вставки у канал Swoole.

### Значення, що повертаються

Чи передалися дані до каналу Swoole.
