- [« SeasLog::getBuffer](seaslog.getbuffer.md)
- [SeasLog::getDatetimeFormat »](seaslog.getdatetimeformat.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Визначає, чи увімкнено буфер

# SeasLog::getBufferEnabled

(PECL seaslog \>u003d1.0.0)

SeasLog::getBufferEnabled — Визначає, чи увімкнено буфер

### Опис

public static **SeasLog::getBufferEnabled**(): bool

Результат об'єднання
[seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer)
і
[seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає TRUE, якщо
[seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer)
є true. Якщо увімкнути
[seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli)
і запустити в cli, параметр seaslog.use_buffer буде скинутий, Seaslog
НЕГАЙНО перезапише дані в сховищі даних.

### Приклади

**Приклад #1 Приклад використання **SeasLog::getBufferEnabled()****

` <?phpvar_dump(SeasLog::getBufferEnabled());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)

### Дивіться також

- [seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer)
- [seaslog.buffer_size](seaslog.configuration.md#ini.seaslog.buffer-size)
- [seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli)
- [SeasLog::getBuffer()](seaslog.getbuffer.md) - Отримує буфер
логів у пам'яті у вигляді масиву
- [SeasLog::flushBuffer()](seaslog.flushbuffer.md) - Очищає буфер
логів, робить дамп у файл програми або відправляє на віддалений API
за допомогою tcp/udp
