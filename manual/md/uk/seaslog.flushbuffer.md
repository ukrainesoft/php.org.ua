- [« SeasLog::error](seaslog.error.md)
- [SeasLog::getBasePath »](seaslog.getbasepath.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Очищає буфер логів, робить дамп у файл програми або відправляє на
віддалений API за допомогою tcp/udp

# SeasLog::flushBuffer

(PECL seaslog \>u003d1.0.0)

SeasLog::flushBuffer - Очищає буфер логів, робить дамп у файл
програми або відправляє на віддалений API за допомогою tcp/udp

### Опис

public static **SeasLog::flushBuffer**(): bool

Очищає буфер логів за допомогою
[seaslog.appender](seaslog.configuration.md#ini.seaslog.appender):
робить дамп у файл програми або відправляє на віддалений API за допомогою
tcp/udp.

> **Примітка**:
>
> Дивіться також:
> [seaslog.appender_retry](seaslog.configuration.md#ini.seaslog.appender-retry)
> [seaslog.remote_host](seaslog.configuration.md#ini.seaslog.remote-host)
> [seaslog.remote_port](seaslog.configuration.md#ini.seaslog.remote-port)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає TRUE у разі успішного очищення буфера, FALSE у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::flushBuffer()****

` <?phpSeasLog::info('info log');SeasLog::debug('debug log');var_dump(SeasLog::getBuffer());var_dump(SeasLog::flushBuffer());var_dump(SeasLog:: getBuffer());?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
["/var/log/www/default/20180707.log"]u003d>
array(2) {
[0]u003d>
string(79) "2018-07-07 10:47:58 | INFO | 71910 | 5b4029ded6009 | 1530931678.877 | info log
"
[1]u003d>
string(81) "2018-07-07 10:47:58 | DEBUG | 71910 | 5b4029ded6009 | 1530931678.877 | debug log
"
}
}
bool(true)
array(0) {
}

### Дивіться також

- [seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer)
- [seaslog.buffer_size](seaslog.configuration.md#ini.seaslog.buffer-size)
- [seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli)
- [SeasLog::getBufferEnabled()](seaslog.getbufferenabled.md) -
Визначає, чи увімкнено буфер
- [SeasLog::getBuffer()](seaslog.getbuffer.md) - Отримує буфер
логів у пам'яті у вигляді масиву
