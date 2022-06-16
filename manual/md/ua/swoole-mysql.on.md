- [« Swoole\MySQL::getBuffer](swoole-mysql.getbuffer.md)
- [Swoole\MySQL::query »](swoole-mysql.query.md)

- [PHP Manual](index.md)
- [Swoole\MySQL](class.swoole-mysql.md)
- реєструє callback-функцію на основі імені події

# Swoole\MySQL::on

(PECL swoole \>u003d 1.9.0)

Swoole\MySQL::on - Реєструє callback-функцію на основі імені події

### Опис

public **Swoole\MySQL::on**(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

Реєструє callback-функцію на основі імені події, на даний момент
підтримується лише подія 'close'.

### Список параметрів

`event_name`

`callback`

### Значення, що повертаються
