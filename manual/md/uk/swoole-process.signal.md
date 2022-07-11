- [« Swoole\Process::read](swoole-process.read.md)
- [Swoole\Process::start »](swoole-process.start.md)

- [PHP Manual](index.md)
- [Swoole\Process](class.swoole-process.md)
- Надсилає сигнал дочірнім процесам

# Swoole\Process::signal

(PECL swoole \>u003d 1.9.0)

Swoole\Process::signal — Надсилає сигнал дочірнім процесам

### Опис

public static **Swoole\Process::signal**(string `$signal_no`,
[callable](language.types.callable.md) `$callback`): void

### Список параметрів

`signal_no`

`callback`

### Значення, що повертаються

У разі успішного відправлення сигналу, повертає TRUE, інакше
повертає FALSE.
