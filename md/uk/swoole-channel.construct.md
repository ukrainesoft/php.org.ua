- [« Swoole\Channel](class.swoole-channel.md)
- [Swoole\Channel::\_\_destruct »](swoole-channel.destruct.md)

- [PHP Manual](index.md)
- [Swoole\Channel](class.swoole-channel.md)
- Створює канал Swoole

# Swoole\Channel::\_\_construct

(PECL swoole \>u003d 1.9.0)

Swoole\Channel::\_\_construct - Створює канал Swoole

### Опис

public **Swoole\Channel::\_\_construct**(string `$size`)

Канал Swoole – це структура даних у пам'яті, яка працює як Chan
в Golang, реалізована на основі пам'яті, що розділяється, і мьютексів. Може
використовуватися як високопродуктивна черга повідомлень у пам'яті.
Створення каналу Swoole із фіксованим розміром. Мінімальний розмір
каналу Swoole складає 64 КБ. Будуть викинуті винятки, якщо
недостатньо пам'яті.

### Список параметрів

`size`
Розмір каналу Swoole.
