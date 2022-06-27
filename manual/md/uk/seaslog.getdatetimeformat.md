- [« SeasLog::getBufferEnabled](seaslog.getbufferenabled.md)
- [SeasLog::getLastLogger »](seaslog.getlastlogger.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує стиль формату дати та часу SeasLog

# SeasLog::getDatetimeFormat

(PECL seaslog \>u003d1.0.0)

SeasLog::getDatetimeFormat — Отримує стиль формату дати та часу
SeasLog

### Опис

public static **SeasLog::getDatetimeFormat**(): string

Отримує стиль формату дати та часу SeasLog. Використовуйте функцію
**SeasLog::getDatetimeFormat()**, щоб отримати значення
[seaslog.default_datetime_format](seaslog.configuration.md#ini.seaslog.default-datetime-format),
який налаштований у php.ini(seaslog.ini).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Отримує стиль формату дати та часу SeasLog
[seaslog.default_datetime_format](seaslog.configuration.md#ini.seaslog.default-datetime-format).
Використання функції
[SeasLog::setDatetimeFormat()](seaslog.setdatetimeformat.md) змінить
це значення.

### Приклади

**Приклад #1 Приклад використання **SeasLog::getDatetimeFormat()****

` <?phpvar_dump(SeasLog::getDateTimeFormat());var_dump(SeasLog::setDateTimeFormat('Ymd His'));var_dump(SeasLog::getDateTimeFormat());?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "Y-m-d H:i:s"
bool(true)
string(7) "Ymd His"

### Дивіться також

- [SeasLog::setDatetimeFormat()](seaslog.setdatetimeformat.md) -
Встановлює стиль формату дати та часу SeasLog
