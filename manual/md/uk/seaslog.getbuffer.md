- [« SeasLog::getBasePath](seaslog.getbasepath.md)
- [SeasLog::getBufferEnabled »](seaslog.getbufferenabled.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує буфер логів у пам'яті у вигляді масиву

# SeasLog::getBuffer

(PECL seaslog \>u003d1.0.0)

SeasLog::getBuffer — Отримує буфер логів у пам'яті у вигляді масиву

### Опис

public static **SeasLog::getBuffer**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив із буфера логів у пам'яті.

### Приклади

**Приклад #1 Приклад використання **SeasLog::getBuffer()****

` <?phpvar_dump(SeasLog::info('info log'));var_dump(SeasLog::debug('debug log'));var_dump(SeasLog::getBuffer());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
array(1) {
["/var/log/www/default/20180707.log"]u003d>
array(2) {
[0]u003d>
string(79) "2018-07-07 10:43:32 | INFO | 71785 | 5b4028d4c58d5 | 1530931412.810 | info log
"
[1]u003d>
string(81) "2018-07-07 10:43:32 | DEBUG | 71785 | 5b4028d4c58d5 | 1530931412.810 | debug log
"
}
}

### Дивіться також

- [seaslog.use_buffer](seaslog.configuration.md#ini.seaslog.use-buffer)
- [seaslog.buffer_size](seaslog.configuration.md#ini.seaslog.buffer-size)
- [seaslog.buffer_disabled_in_cli](seaslog.configuration.md#ini.seaslog.buffer-disabled-in-cli)
- [SeasLog::getBufferEnabled()](seaslog.getbufferenabled.md) -
Визначає, чи увімкнено буфер
- [SeasLog::flushBuffer()](seaslog.flushbuffer.md) - Очищає буфер
логів, робить дамп у файл програми або відправляє на віддалений API
за допомогою tcp/udp
