- [« SeasLog::getLastLogger](seaslog.getlastlogger.md)
- [SeasLog::getRequestVariable »](seaslog.getrequestvariable.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Отримує диференційовані запити SeasLog request_id

# SeasLog::getRequestID

(PECL seaslog \>u003d1.0.0)

SeasLog::getRequestID — Отримує диференційовані запити SeasLog
request_id

### Опис

public static **SeasLog::getRequestID**(): string

Щоб відрізнити один запит, наприклад, не викликати функції
[SeasLog::setRequestId()](seaslog.setrequestid.md), при ініціалізації
запиту використовується унікальне значення, що генерується вбудованою
функцією static char get_uniqid().

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, створений вбудованою функцією static char
\*get_uniqid()\` або задану функцією
[SeasLog::setRequestId()](seaslog.setrequestid.md).

### Приклади

**Приклад #1 Приклад використання **SeasLog::getRequestID()****

` <?phpvar_dump(SeasLog::getRequestID());var_dump(SeasLog::setRequestID('reqeust_id_test_'.time()));var_dump(SeasLog::getRequestID());?> `

Результатом виконання цього прикладу буде щось подібне:

string(13) "5b3f21a209519"
bool(true)
string(26) "reqeust_id_test_1530864034"

### Дивіться також

- [SeasLog::setRequestID()](seaslog.setrequestid.md) - Встановлює
диференційовані запити SeasLog request_id
- Змінна \ %Q в [Таблиці змінних за замовчуванням
Seaslog](seaslog.configuration.md#ini.seaslog.default-template).
