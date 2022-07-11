- [« SeasLog::flushBuffer](seaslog.flushbuffer.md)
- [SeasLog::getBuffer »](seaslog.getbuffer.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує базовий шлях SeasLog

# SeasLog::getBasePath

(PECL seaslog \>u003d1.0.0)

SeasLog::getBasePath — Отримує базовий шлях SeasLog

### Опис

public static **Seaslog::getBasePath**(): string

Використовуйте функцію **SeasLog::getBasePath()**, щоб отримати значення
[seaslog.default_basepath](seaslog.configuration.md#ini.seaslog.default-basepath),
який налаштований у php.ini (seaslog.ini).

Якщо ви використовуєте [Seaslog::setBasePath()](seaslog.setbasepath.md),
результат зміниться.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає значення
[seaslog.default_basepath](seaslog.configuration.md#ini.seaslog.default-basepath)
у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **SeasLog::getBasePath()****

` <?phpvar_dump(SeasLog::getBasePath());?> `

Результатом виконання цього прикладу буде щось подібне:

string(12) "/var/log/www"
