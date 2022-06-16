- [«seaslog_get_version](function.seaslog-get-version.md)
- [SeasLog::alert »](seaslog.alert.md)

- [PHP Manual](index.md)
- [Seaslog](book.seaslog.md)
- Клас SeasLog

# Клас SeasLog

(PECL seaslog \>u003d1.0.0)

## Вступ

## Огляд класів

class **SeasLog** {

/\* Методи \*/

public static [alert](seaslog.alert.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public static [analyzerCount](seaslog.analyzercount.md)(string
`$level`, string `$log_path` u003d ?, string `$key_word` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [analyzerDetail](seaslog.analyzerdetail.md)(
string `$level`,
string `$log_path` u003d ?,
string `$key_word` u003d ?,
int `$start` u003d ?,
int `$limit` u003d ?,
int `$order` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [closeLoggerStream](seaslog.closeloggerstream.md)(int
`$model`, string `$logger`): bool

public static [critical](seaslog.critical.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public static [debug](seaslog.debug.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public [\_\_destruct](seaslog.destruct.md)()

public static [emergency](seaslog.emergency.md)(string `$message`,
array `$content` u003d ?, string `$logger` u003d ?): bool

public static [error](seaslog.error.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public static [flushBuffer](seaslog.flushbuffer.md)(): bool

public static [Seaslog::getBasePath](seaslog.getbasepath.md)(): string

public static [getBuffer](seaslog.getbuffer.md)(): array

public static [getBufferEnabled](seaslog.getbufferenabled.md)(): bool

public static [getDatetimeFormat](seaslog.getdatetimeformat.md)():
string

public static [getLastLogger](seaslog.getlastlogger.md)(): string

public static [getRequestID](seaslog.getrequestid.md)(): string

public static [getRequestVariable](seaslog.getrequestvariable.md)(int
`$key`): bool

public static [info](seaslog.info.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public static [log](seaslog.log.md)(
string `$level`,
string `$message` u003d ?,
array `$content` u003d ?,
string `$logger` u003d ?
): bool

public static [notice](seaslog.notice.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

public static [setBasePath](seaslog.setbasepath.md)(string
`$base_path`): bool

public static [setDatetimeFormat](seaslog.setdatetimeformat.md)(string
`$format`): bool

public static [setLogger](seaslog.setlogger.md)(string `$logger`):
bool

public static [setRequestID](seaslog.setrequestid.md)(string
`$request_id`): bool

public static [setRequestVariable](seaslog.setrequestvariable.md)(int
`$key`, string `$value`): bool

public static [warning](seaslog.warning.md)(string `$message`, array
`$content` u003d ?, string `$logger` u003d ?): bool

}

## Зміст

- [SeasLog::alert](seaslog.alert.md) — Записує інформацію рівня
"alert" у журнал
- [SeasLog::analyzerCount](seaslog.analyzercount.md) — Отримує
кількість журналів за рівнем, log_path та key_word
- [SeasLog::analyzerDetail](seaslog.analyzerdetail.md) — Отримує
деталізацію журналу за рівнем, log_path, key_word, start, limit,
order
- [SeasLog::closeLoggerStream](seaslog.closeloggerstream.md) -
Вручну звільняє потік від реєстратора
- [SeasLog::\_\_construct](seaslog.construct.md) — Опис
- [SeasLog::critical](seaslog.critical.md) — Записує інформацію
рівня "critical" у журнал
- [SeasLog::debug](seaslog.debug.md) — Записує інформацію рівня
"debug" до журналу
- [SeasLog::\_\_destruct](seaslog.destruct.md) — Опис
- [SeasLog::emergency](seaslog.emergency.md) — Записує інформацію
рівня "emergency" до журналу
- [SeasLog::error](seaslog.error.md) — Записує інформацію рівня
"error" у журнал
- [SeasLog::flushBuffer](seaslog.flushbuffer.md) - Очищає буфер
логів, робить дамп у файл програми або відправляє на віддалений API
за допомогою tcp/udp
- [SeasLog::getBasePath](seaslog.getbasepath.md) — Отримує базовий
шлях SeasLog
- [SeasLog::getBuffer](seaslog.getbuffer.md) — Отримує буфер логів
у пам'яті у вигляді масиву
- [SeasLog::getBufferEnabled](seaslog.getbufferenabled.md) -
Визначає, чи увімкнено буфер
- [SeasLog::getDatetimeFormat](seaslog.getdatetimeformat.md) -
Отримує стиль формату дати та часу SeasLog
- [SeasLog::getLastLogger](seaslog.getlastlogger.md) — Отримує
останній шлях реєстратора SeasLog
- [SeasLog::getRequestID](seaslog.getrequestid.md) — Отримує
диференційовані запити SeasLog request_id
- [SeasLog::getRequestVariable](seaslog.getrequestvariable.md) -
Отримує змінну запиту SeasLog
- [SeasLog::info](seaslog.info.md) — Записує інформацію рівня
"info" у журнал
- [SeasLog::log](seaslog.log.md) — Загальна функція запису до журналу
- [SeasLog::notice](seaslog.notice.md) — Записує інформацію
рівня "notice" до журналу
- [SeasLog::setBasePath](seaslog.setbasepath.md) — Встановлює
базовий шлях SeasLog
- [SeasLog::setDatetimeFormat](seaslog.setdatetimeformat.md) -
Встановлює стиль формату дати та часу SeasLog
- [SeasLog::setLogger](seaslog.setlogger.md) — Встановлює ім'я
реєстратора SeasLog
- [SeasLog::setRequestID](seaslog.setrequestid.md) — Встановлює
диференційовані запити SeasLog request_id
- [SeasLog::setRequestVariable](seaslog.setrequestvariable.md) -
Встановлює змінну запиту SeasLog вручну
- [SeasLog::warning](seaslog.warning.md) — Записує інформацію
рівня "warning" до журналу
