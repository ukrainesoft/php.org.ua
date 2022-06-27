- [« Swoole\Process::freeQueue](swoole-process.freequeue.md)
- [Swoole\Process::name »](swoole-process.name.md)

- [PHP Manual](index.md)
- [Swoole\Process](class.swoole-process.md)
- Надсилає сигнал дочірньому процесу

# Swoole\Process::kill

(PECL swoole \>u003d 1.9.0)

Swoole\Process::kill — Надсилає сигнал дочірньому процесу

### Опис

public static **Swoole\Process::kill**(int `$pid`, int `$signal_no` u003d
?): bool

Надсилає сигнал дочірньому процесу.

### Список параметрів

`pid`
Ідентифікатор процесу

`signal_no`
Сигнал до відправлення

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
