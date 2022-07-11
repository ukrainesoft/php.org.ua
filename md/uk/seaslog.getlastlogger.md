- [« SeasLog::getDatetimeFormat](seaslog.getdatetimeformat.md)
- [SeasLog::getRequestID »](seaslog.getrequestid.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує останній шлях реєстратора SeasLog

# SeasLog::getLastLogger

(PECL seaslog \>u003d1.0.0)

SeasLog::getLastLogger — Отримує останній шлях реєстратора SeasLog

### Опис

public static **SeasLog::getLastLogger**(): string

Використовуйте функцію **SeasLog::getLastLogger()**, щоб отримати
значення
[seaslog.default_logger](seaslog.configuration.md#ini.seaslog.default-logger),
яке задано у php.ini (seaslog.ini).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Використання функції [SeasLog::setLogger()](seaslog.setlogger.md)
змінить значення функції SeasLog::getLastLogger()**.

### Приклади

**Приклад #1 Приклад використання **SeasLog::getLastLogger()****

` <?phpvar_dump(SeasLog::getLastLogger());SeasLog::setLogger('theNewLogger');var_dump(SeasLog::getLastLogger());?> `

Результатом виконання цього прикладу буде щось подібне:

string(7) "default"
string(12) "theNewLogger"

### Дивіться також

- [SeasLog::setLogger()](seaslog.setlogger.md) - Встановлює ім'я
реєстратора SeasLog
