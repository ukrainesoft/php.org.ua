- [« SeasLog::setLogger](seaslog.setlogger.md)
- [SeasLog::setRequestVariable »](seaslog.setrequestvariable.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Встановлює диференційовані запити SeasLog request_id

# SeasLog::setRequestID

(PECL seaslog \>u003d1.0.0)

SeasLog::setRequestID — Встановлює диференційовані запити SeasLog
request_id

### Опис

public static **SeasLog::setRequestID**(string `$request_id`): bool

Щоб відрізнити один запит, наприклад, не викликати функції
**SeasLog::setRequestId()**, при ініціалізації запиту використовується
унікальне значення, що генерується вбудованою функцією static char
\*get_uniqid()\`.

### Список параметрів

`request_id`
Рядок.

### Значення, що повертаються

Повертає TRUE у разі успішної установки request_id, FALSE у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::setRequestID()****

` <?phpvar_dump(SeasLog::setRequestID(time() . rand()));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)

### Дивіться також

- [SeasLog::getRequestID()](seaslog.getrequestid.md) - Отримує
диференційовані запити SeasLog request_id
