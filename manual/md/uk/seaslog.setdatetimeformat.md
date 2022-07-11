- [« SeasLog::setBasePath](seaslog.setbasepath.md)
- [SeasLog::setLogger »](seaslog.setlogger.md)

- [PHP Manual](index.md)
- [SeasLog](class.seaslog.md)
- Встановлює стиль формату дати та часу SeasLog

# SeasLog::setDatetimeFormat

(PECL seaslog \>u003d1.0.0)

SeasLog::setDatetimeFormat — Встановлює стиль формату дати та часу
SeasLog

### Опис

public static **SeasLog::setDatetimeFormat**(string `$format`): bool

Встановлює стиль формату дати та часу SeasLog.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`format`
Рядок. Наприклад, Y-m-d H:i:s або Ymd His. Дивіться перший параметр
"format" функції [date()](function.date.md).

### Значення, що повертаються

Повертає TRUE у разі успішного виконання заданого формату дати та
часу, FALSE у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SeasLog::setDatetimeFormat()****

` <?phpvar_dump(SeasLog::setDateTimeFormat('Ymd His'));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)

### Дивіться також

- [SeasLog::getDateTimeFormat()](seaslog.getdatetimeformat.md) -
Отримує стиль формату дати та часу SeasLog
